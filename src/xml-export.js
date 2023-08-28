const LineJoinModes = [
    "Round",
    "Bevel",
    "Miter"
]

const TextXAlignments = [
    "LEFT",
    "RIGHT",
    "CENTER",
]

const TextYAlignments = [
    "TOP",
    "CENTER",
    "BOTTOM",
]

function limitDecimals(Number, Decimals) { // Limit decimals to x places and round up/down
    if (typeof Number !== "number") return 0;
    if (isNaN(Number)) return 0;
    if (Decimals !== undefined && isNaN(Decimals)) Decimals = null;

    return parseFloat(Number.toFixed(Decimals));
}

function createRobloxElement(Properties) { // Creates the roblox xml for the element
    var XML = "";

    function extendXML(String) {
        XML += String;
    }

    extendXML(`<Item class="${Properties.Class}" referent="RBX0">`);
    extendXML(`<Properties>`);

    // Add properties

    extendXML(`<string name="Name">${(Properties.Name || Properties.Class || "Unknown").replace("\n", "")}</string>`);

    if (Properties.BackgroundColor3 !== undefined) {
        var Colour = Properties.BackgroundColor3;

        for (const Property in Colour) {
            Colour[Property] = limitDecimals(Colour[Property], 6);
        }

        extendXML(`<Color3 name="BackgroundColor3"><R>${Colour.R}</R><G>${Colour.G}</G><B>${Colour.B}</B></Color3>`);
    }

    if (Properties.TextColor3 !== undefined) {
        var Colour = Properties.TextColor3;

        for (const Property in Colour) {
            Colour[Property] = limitDecimals(Colour[Property], 6);
        }

        extendXML(`<Color3 name="TextColor3"><R>${Colour.R}</R><G>${Colour.G}</G><B>${Colour.B}</B></Color3>`);
    }

    if (Properties.Colour !== undefined) {
        var Colour = Properties.Colour;

        if (Colour["R"] !== undefined) {
            for (const Property in Colour) {
                Colour[Property] = limitDecimals(Colour[Property], 6);
            }

            extendXML(`<Color3 name="Color"><R>${Colour.R}</R><G>${Colour.G}</G><B>${Colour.B}</B></Color3>`);
        } else {
            var ColourSeq = "";
            var Previous;

            for (var i = 0; i < Colour.length; i++) {
                const ColourStop = Colour[i];
                var ColourVal = ColourStop.Colour;

                for (const Property in ColourVal) {
                    ColourVal[Property] = limitDecimals(ColourVal[Property], 6);
                }

                if (i === 0 && ColourStop.TimePosition !== 0) ColourSeq += `0 ${ColourVal.R} ${ColourVal.G} ${ColourVal.B} 0 `; // Add the first keyframe (if it doesn't exist

                Previous = ColourStop;
                ColourSeq += `${ColourStop.TimePosition} ${ColourVal.R} ${ColourVal.G} ${ColourVal.B} 0 `;
            }

            if (Previous.TimePosition !== 1) ColourSeq += `1 ${Previous.Colour.R} ${Previous.Colour.G} ${Previous.Colour.B} 0 `; // Add the last keyframe (if it doesn't exist)

            extendXML(`<ColorSequence name="Color">${ColourSeq}</ColorSequence>`);
        }
    }

    if (Properties.Transparency !== undefined) {
        const Transparency = Properties.Transparency;

        if (!Array.isArray(Transparency)) extendXML(`<float name="Transparency">${1 - limitDecimals(Properties.Transparency, 3)}</float>`);
        else {
            var NumberSequence = "";
            var Previous;

            for (var i = 0; i < Transparency.length; i++) {
                var TransparencyStop = Transparency[i];

                if (i === 0 && TransparencyStop.TimePosition !== 0) NumberSequence += `0 ${limitDecimals(TransparencyStop.Transparency, 3)} 0 `; // Add the first keyframe (if it doesn't exist

                Previous = TransparencyStop;
                NumberSequence += `${TransparencyStop.TimePosition} ${limitDecimals(TransparencyStop.Transparency, 3)} 0 `;
            }

            if (Previous.TimePosition !== 1) NumberSequence += `1 ${Previous.Transparency} 0 `; // Add the last keyframe (if it doesn't exist)

            extendXML(`<NumberSequence name="Transparency">${NumberSequence}</NumberSequence>`);
        }
    }

    if (Properties.Size !== undefined) {
        var Size = Properties.Size;
        extendXML(`<UDim2 name="Size"><XS>0</XS><XO>${limitDecimals(Size.X, 0)}</XO><YS>0</YS><YO>${limitDecimals(Size.Y, 0)}</YO></UDim2>`);
    }

    if (Properties.Class != "ImageLabel" && Properties.Rotation !== undefined && Properties.Rotation !== 0) {
        extendXML(`<float name="Rotation">${limitDecimals(Properties.Rotation, 3)}</float>`);

        if (Properties.Position !== undefined && Properties.Size !== undefined) {
            var Size = Properties.Size;
            var BoundingBox = Properties.Element.absoluteBoundingBox;

            Properties.Position = {
                X: Properties.Position.X + ((BoundingBox.width - Size.X) / 2),
                Y: Properties.Position.Y + ((BoundingBox.height - Size.Y) / 2)
            }
        }
    }

    if (Properties.Position !== undefined) {
        var Position = Properties.Position;
        extendXML(`<UDim2 name="Position"><XS>0</XS><XO>${limitDecimals(Position.X, 0)}</XO><YS>0</YS><YO>${limitDecimals(Position.Y, 0)}</YO></UDim2>`);
    }

    if (Properties.BackgroundTransparency !== undefined) extendXML(`<float name="BackgroundTransparency">${1 - limitDecimals(Properties.BackgroundTransparency, 3)}</float>`);
    if (Properties.Thickness !== undefined) extendXML(`<float name="Thickness">${limitDecimals(Properties.Thickness, 0)}</float>`);
    if (Properties.LineJoinMode !== undefined) extendXML(`<Enum name="LineJoinMode">${LineJoinModes.indexOf(Properties.LineJoinMode)}</Enum>`);
    if (Properties.CornerRadius !== undefined) extendXML(`<UDim2 name="CornerRadius"><S>${limitDecimals(Properties.CornerRadius.S, 0)}</S><O>${limitDecimals(Properties.CornerRadius.O, 0)}</O></UDim2>`);
    if (Properties.BorderSizePixel !== undefined) extendXML(`<int name="BorderSizePixel">${limitDecimals(Properties.BorderSizePixel, 0)}</int>`);
    if (Properties.ClipsDescendants !== undefined) extendXML(`<bool name="ClipsDescendants">${Properties.ClipsDescendants}</bool>`);
    if (Properties.TextTransparency !== undefined) extendXML(`<float name="TextTransparency">${1 - Properties.TextTransparency}</float>`);
    if (Properties.TextSize !== undefined) extendXML(`<int name="TextSize">${limitDecimals(Properties.TextSize, 0)}</int>`);
    if (Properties.Text !== undefined) extendXML(`<string name="Text">${Properties.Text}</string>`);
    if (Properties.TextWrapped !== undefined) extendXML(`<bool name="TextWrapped">${Properties.TextWrapped}</bool>`);
    if (Properties.TextScaled !== undefined) extendXML(`<bool name="TextScaled">${Properties.TextScaled}</bool>`);
    if (Properties.TextStrokeTransparency !== undefined) extendXML(`<float name="TextStrokeTransparency">${1 - Properties.TextStrokeTransparency}</float>`);
    if (Properties.TextStrokeColor3 !== undefined) extendXML(`<Color3 name="TextStrokeColor3"><R>${limitDecimals(Properties.TextStrokeColor3.R, 3)}</R><G>${limitDecimals(Properties.TextStrokeColor3.G, 3)}</G><B>${limitDecimals(Properties.TextStrokeColor3.B, 3)}</B></Color3>`);
    if (Properties.TextXAlignment !== undefined) extendXML(`<token name="TextXAlignment">${TextXAlignments.indexOf(Properties.TextXAlignment)}</token>`);
    if (Properties.TextYAlignment !== undefined) extendXML(`<token name="TextYAlignment">${TextYAlignments.indexOf(Properties.TextYAlignment)}</token>`);
    if (Properties.Font !== undefined) {
        const Font = Fonts[Properties.Font.Style] || Fonts["Regular"];
        extendXML(`<Font name="FontFace"><Family><url>rbxasset://fonts/families/${Properties.Font.Family}.json</url></Family><Weight>${Font.Weight}</Weight><Style>${Font.Style}</Style></Font>`);
    }
    if (Properties.RichText !== undefined) extendXML(`<bool name="RichText">${Properties.RichText}</bool>`);
    if (Properties.UploadId !== undefined && ImageExports[Properties.UploadId] !== undefined) extendXML(`<string name="Image"><url>${ImageExports[Properties.UploadId].ImageId}</url></string>`); // Image is exported
    else if (Properties.Image !== undefined) extendXML(`<string name="Image">${Properties.Image}</string>`); // Image is not exported
    if (Properties.ImageTransparency !== undefined) extendXML(`<float name="ImageTransparency">${1 - limitDecimals(Properties.ImageTransparency, 3)}</float>`);
    if (Properties.Visible !== undefined) extendXML(`<bool name="Visible">${Properties.Visible}</bool>`);
    if (Properties.Enabled !== undefined) extendXML(`<bool name="Enabled">${Properties.Enabled}</bool>`);

    // End of properties

    extendXML("</Properties>");

    // Add children

    if (Properties.Children !== undefined && Properties.Children.length > 0 && Properties.NoChildren === undefined) {
        for (var i = 0; i < Properties.Children.length; i++) {
            extendXML(createRobloxElement(Properties.Children[i], i));
        }
    }

    return XML + "</Item>";
}

function convertToXML(Objects) { // Converts the objects into roblox xml format
    var XML = '<!--\n\tGenerated by Figma to Roblox\n\tReport any bugs/issues to NoTwistedHere#6703\n-->\n\n<roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4"><Meta name="ExplicitAutoJoints">true</Meta>';

    for (var i = 0; i < Objects.length; i++) {
        XML += createRobloxElement(Objects[i]);
    }

    return XML + '</roblox>';
}

module.exports = {
    convertToXML: convertToXML
};