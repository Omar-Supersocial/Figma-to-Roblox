// Fusion Conversion
const FusionFunctionCreators = {
    "FontFace": createFontFusionFunction,
    "Position": createUDim2FusionFunction,
    "Size": createUDim2FusionFunction,
    "CornerRadius": createUDimFusionFunction,
    "TextXAlignment": createEnumFusionFunction,
    "TextYAlignment": createEnumFusionFunction,
    "LineJoinMode": createEnumFusionFunction,
    "TextStrokeTransparency": createTransparencyFusionFunction,
    "BackgroundTransparency": createTransparencyFusionFunction,
    "ImageTransparency": createTransparencyFusionFunction,
    "TextTransparency": createTransparencyFusionFunction,
    "Transparency": createTransparencyFusionFunction,
    "BorderSizePixel": createPixelSizeFusionFunction,
    "Thickness": createPixelSizeFusionFunction,
    "TextSize": createPixelSizeFusionFunction,
    "BackgroundColor3": createColorFusionFunction,
    "TextStrokeColor3": createColorFusionFunction,
    "TextColor3": createColorFusionFunction,
    "Image": createStringFusionFunction,
    "Color": createColorFusionFunction,
    "Name": createStringFusionFunction,
    "Text": createMultiLineFusionFunction,
};

function createFontFusionFunction(font) {
    const fontInfo = Fonts[font] || Fonts["Regular"];
    const style = formatCase(fontInfo.Style);
    return `Font.new("rbxasset://fonts/families/${fontInfo.Family}.json", Enum.FontWeight.${fontInfo.Weight}, Enum.FontStyle.${style})`;
}

function createUDimFusionFunction(udim) {
    return `UDim.new(${limitDecimals(udim.S, 0)}, ${limitDecimals(udim.O, 0)})`;
}

function createUDim2FusionFunction(udim2) {
    return `UDim2.fromOffset(${limitDecimals(udim2.X, 0)}, ${limitDecimals(udim2.Y, 0)})`;
}

function createEnumFusionFunction(enumName) {
    const formattedEnumName = formatCase(enumName);
    return `Enum.${formattedEnumName}`;
}

function createTransparencyFusionFunction(number) {
    return 1 - limitDecimals(number, 3);
}

function createPixelSizeFusionFunction(number) {
    return limitDecimals(number, 0);
}

function createColorFusionFunction(color) {
    return get255Color(color);
}


function createMultiLineFusionFunction(str) {
    return `[[${str}]]`;
}

function createStringFusionFunction(str) {
    return `"${str}"`;
}

function limitDecimals(Number, Decimals) { // Limit decimals to x places and round up/down
    if (typeof Number !== "number") return 0;
    if (isNaN(Number)) return 0;
    if (Decimals !== undefined && isNaN(Decimals)) Decimals = null;

    return parseFloat(Number.toFixed(Decimals));
}

function formatCase(str) {
    const strs = str.split('.');
    const parts = strs.map((part, index) => {
        if (index === strs.length - 1) {
            return part.substring(0, 1).toUpperCase() + part.substring(1).toLowerCase();
        }
        return part;
    });
    return parts.join('.');
}

function get255Color(color) {
    const r = limitDecimals(color.R * 255, 0);
    const g = limitDecimals(color.G * 255, 0);
    const b = limitDecimals(color.B * 255, 0);
    return `Color3.fromRGB(${r}, ${g}, ${b})`;
}

function addIndentation(str, depth = 1) {
    const lines = str.split('\n');
    const indent = '\t'.repeat(depth);

    const indentedLines = lines.map(line => indent + line);
    return indentedLines.join('\n');
}

function propertyToFusion(propertyName, propertyValue) {
    if (propertyValue !== undefined) {
        if (FusionFunctionCreators[propertyName] !== undefined) {
            propertyValue = FusionFunctionCreators[propertyName](propertyValue)
        }
        return `\n${propertyName} = ${propertyValue},`
    } else
        return ""
}

function createFusionElement(Properties) { // Creates the fusion code for the element
    var FUSION_CODE = "";

    function extendCode(str) {
        FUSION_CODE += str;
    }

    // Add properties
    const propertiesToExtend = [
        { key: "Name" },
        { key: "Text" },
        { key: "TextXAlignment", value: Properties.TextXAlignment ? "TextXAlignment." + Properties.TextXAlignment : undefined },
        { key: "TextYAlignment", value: Properties.TextYAlignment ? "TextYAlignment." + Properties.TextYAlignment : undefined },
        { key: "LineJoinMode", value: Properties.LineJoinMode ? "LineJoinMode." + Properties.LineJoinMode : undefined },
        { key: "CornerRadius" },
        { key: "Position" },
        { key: "Size" },
        { key: "BackgroundColor3" },
        { key: "TextStrokeColor3" },
        { key: "TextColor3" },
        { key: "TextWrapped" },
        { key: "TextScaled" },
        { key: "Thickness" },
        { key: "TextSize" },
        { key: "BackgroundTransparency" },
        { key: "TextStrokeTransparency" },
        { key: "ImageTransparency" },
        { key: "TextTransparency" },
        { key: "ClipsDescendants" },
        { key: "RichText" },
        { key: "Visible" },
        { key: "Enabled" },
        //{ key: "FontFace", value: Properties.FontFace }
    ];

    for (const property of propertiesToExtend) {
        extendCode(propertyToFusion(property.key, property.value ? property.value : Properties[property.key]));
    }

    if (Properties.UploadId !== undefined && ImageExports[Properties.UploadId] !== undefined)
        extendCode(propertyToFusion("Image", ImageExports[Properties.UploadId].ImageId))

    if (Properties.Colour !== undefined) {
        var Colour = Properties.Colour;

        if (Colour["R"] !== undefined) {
            extendCode(propertyToFusion("Color", Properties.Colour))
        } else {
            const keyframeCount = Colour.length;
            if (keyframeCount == 1) {
                extendCode(`\nColor = ColorSequence.new(${get255Color(Colour[i])}),`)
            } else {
                var ColourSeq = "ColorSequence.new({";

                function addKeypoint(time, color) {
                    ColourSeq += `\n\tColorSequenceKeypoint.new(${time}, ${get255Color(color)}),`;
                }

                for (var i = 0; i < keyframeCount; i++) {
                    const ColourStop = Colour[i];

                    if (i === 0 && ColourStop.TimePosition !== 0)
                        addKeypoint(0, ColourStop.Colour); // Add the first keyframe (if it doesn't exist)
                    else if (i === keyframeCount - 1 && ColourStop.TimePosition !== 1)
                        addKeypoint(1, ColourStop.Colour); // Add the last keyframe (if it doesn't exist)

                    addKeypoint(ColourStop.TimePosition, ColourStop.Colour);
                }

                ColourSeq += "\n})"
                extendCode(`\nColor = ${ColourSeq},`)
            }
        }
    }

    if (Properties.Transparency !== undefined) {
        const Transparency = Properties.Transparency;

        if (!Array.isArray(Transparency))
            extendCode(propertyToFusion("Transparency", Transparency))
        else {
            const keyframeCount = Colour.length;
            if (keyframeCount == 1) {
                extendCode(`\nnTransparency = NumberSequence.new(${limitDecimals(transparency, 3)}),`)
            } else {
                var NumberSeq = "NumberSequence.new({";

                function addKeypoint(time, transparency) {
                    NumberSeq += `\n\tNumberSequenceKeypoint.new(${time}, ${limitDecimals(transparency, 3)}),`;
                }

                for (var i = 0; i < keyframeCount; i++) {
                    var TransparencyStop = Transparency[i];

                    if (i === 0 && TransparencyStop.TimePosition !== 0)
                        addKeypoint(0, TransparencyStop.Transparency); // Add the first keyframe (if it doesn't exist)
                    else if (i === keyframeCount - 1 && TransparencyStop.TimePosition !== 1)
                        addKeypoint(1, TransparencyStop.Transparency); // Add the last keyframe (if it doesn't exist)

                    addKeypoint(TransparencyStop.TimePosition, TransparencyStop.Transparency);
                }

                NumberSeq += "\n})"
                extendCode(`\nTransparency = ${NumberSeq},`)
            }
        }
    }

    if (Properties.Class != "ImageLabel" && Properties.Rotation !== undefined && Properties.Rotation !== 0) {
        extendCode(propertyToFusion("Rotation", limitDecimals(Properties.Rotation, 3)))

        if (Properties.Position !== undefined && Properties.Size !== undefined) {
            var Size = Properties.Size;
            var BoundingBox = Properties.Element.absoluteBoundingBox;

            Properties.Position = {
                X: Properties.Position.X + ((BoundingBox.width - Size.X) / 2),
                Y: Properties.Position.Y + ((BoundingBox.height - Size.Y) / 2)
            }
        }
    }

    //extendCode(propertyToFusion("FontFace", Properties.Font))

    // Add children
    if (Properties.Children !== undefined && Properties.Children.length > 0 && Properties.NoChildren === undefined) {
        extendCode("\n[Children] = {\n")
        for (var i = 0; i < Properties.Children.length; i++) {
            extendCode(addIndentation(createFusionElement(Properties.Children[i], i)) + ",\n");
        }
        extendCode("}")
    }

    // Add indentation
    return `New("${Properties.Class}")({${addIndentation(FUSION_CODE)}\n})`;;
}

function convertToFusion(Objects) { // Converts the objects into fusion code format
    var FUSION_CODE = ``
    for (var i = 0; i < Objects.length; i++) {
        FUSION_CODE += createFusionElement(Objects[i]);
    }

    return FUSION_CODE;
}

module.exports = {
    convertToFusion: convertToFusion
};