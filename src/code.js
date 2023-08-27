/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@bbbbbbbb@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@FFFFFFFFFFFFFFFFFFFFFF@@iiii@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@tttt@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@RRRRRRRRRRRRRRRRR@@@@@@@@@@@@@@@@@@@b::::::b@@@@@@@@@@@@lllllll@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@F::::::::::::::::::::F@i::::i@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ttt:::t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@R::::::::::::::::R@@@@@@@@@@@@@@@@@@b::::::b@@@@@@@@@@@@l:::::l@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@F::::::::::::::::::::F@@iiii@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@t:::::t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@R::::::RRRRRR:::::R@@@@@@@@@@@@@@@@@b::::::b@@@@@@@@@@@@l:::::l@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@FF::::::FFFFFFFFF::::F@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@t:::::t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@RR:::::R@@@@@R:::::R@@@@@@@@@@@@@@@@@b:::::b@@@@@@@@@@@@l:::::l@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@F:::::F@@@@@@@FFFFFFiiiiiii@@@@ggggggggg@@@ggggg@@@mmmmmmm@@@@mmmmmmm@@@@@aaaaaaaaaaaaa@@@@@@@@ttttttt:::::ttttttt@@@@@@@ooooooooooo@@@@@@@@@@R::::R@@@@@R:::::R@@@ooooooooooo@@@b:::::bbbbbbbbb@@@@@l::::l@@@@ooooooooooo@xxxxxxx@@@@@@xxxxxxx@@@@@
    @@@@@@@F:::::F@@@@@@@@@@@@@i:::::i@@@g:::::::::ggg::::g@mm:::::::m@@m:::::::mm@@@a::::::::::::a@@@@@@@t:::::::::::::::::t@@@@@oo:::::::::::oo@@@@@@@@R::::R@@@@@R:::::R@oo:::::::::::oo@b::::::::::::::bb@@@l::::l@@oo:::::::::::oox:::::x@@@@x:::::x@@@@@@
    @@@@@@@F::::::FFFFFFFFFF@@@@i::::i@@g:::::::::::::::::gm::::::::::mm::::::::::m@@aaaaaaaaa:::::a@@@@@@t:::::::::::::::::t@@@@o:::::::::::::::o@@@@@@@R::::RRRRRR:::::R@o:::::::::::::::ob::::::::::::::::b@@l::::l@o:::::::::::::::ox:::::x@@x:::::x@@@@@@@
    @@@@@@@F:::::::::::::::F@@@@i::::i@g::::::ggggg::::::ggm::::::::::::::::::::::m@@@@@@@@@@@a::::a@@@@@@tttttt:::::::tttttt@@@@o:::::ooooo:::::o@@@@@@@R:::::::::::::RR@@o:::::ooooo:::::ob:::::bbbbb:::::::b@l::::l@o:::::ooooo:::::o@x:::::xx:::::x@@@@@@@@
    @@@@@@@F:::::::::::::::F@@@@i::::i@g:::::g@@@@@g:::::g@m:::::mmm::::::mmm:::::m@@@@aaaaaaa:::::a@@@@@@@@@@@@t:::::t@@@@@@@@@@o::::o@@@@@o::::o@@@@@@@R::::RRRRRR:::::R@o::::o@@@@@o::::ob:::::b@@@@b::::::b@l::::l@o::::o@@@@@o::::o@@x::::::::::x@@@@@@@@@
    @@@@@@@F::::::FFFFFFFFFF@@@@i::::i@g:::::g@@@@@g:::::g@m::::m@@@m::::m@@@m::::m@@aa::::::::::::a@@@@@@@@@@@@t:::::t@@@@@@@@@@o::::o@@@@@o::::o@@@@@@@R::::R@@@@@R:::::Ro::::o@@@@@o::::ob:::::b@@@@@b:::::b@l::::l@o::::o@@@@@o::::o@@@x::::::::x@@@@@@@@@@
    @@@@@@@F:::::F@@@@@@@@@@@@@@i::::i@g:::::g@@@@@g:::::g@m::::m@@@m::::m@@@m::::m@a::::aaaa::::::a@@@@@@@@@@@@t:::::t@@@@@@@@@@o::::o@@@@@o::::o@@@@@@@R::::R@@@@@R:::::Ro::::o@@@@@o::::ob:::::b@@@@@b:::::b@l::::l@o::::o@@@@@o::::o@@@x::::::::x@@@@@@@@@@
    @@@@@@@F:::::F@@@@@@@@@@@@@@i::::i@g::::::g@@@@g:::::g@m::::m@@@m::::m@@@m::::ma::::a@@@@a:::::a@@@@@@@@@@@@t:::::t@@@@tttttto::::o@@@@@o::::o@@@@@@@R::::R@@@@@R:::::Ro::::o@@@@@o::::ob:::::b@@@@@b:::::b@l::::l@o::::o@@@@@o::::o@@x::::::::::x@@@@@@@@@
    @@@@@FF:::::::FF@@@@@@@@@@@i::::::ig:::::::ggggg:::::g@m::::m@@@m::::m@@@m::::ma::::a@@@@a:::::a@@@@@@@@@@@@t::::::tttt:::::to:::::ooooo:::::o@@@@@RR:::::R@@@@@R:::::Ro:::::ooooo:::::ob:::::bbbbbb::::::bl::::::lo:::::ooooo:::::o@x:::::xx:::::x@@@@@@@@
    @@@@@F::::::::FF@@@@@@@@@@@i::::::i@g::::::::::::::::g@m::::m@@@m::::m@@@m::::ma:::::aaaa::::::a@@@@@@@@@@@@tt::::::::::::::to:::::::::::::::o@@@@@R::::::R@@@@@R:::::Ro:::::::::::::::ob::::::::::::::::b@l::::::lo:::::::::::::::ox:::::x@@x:::::x@@@@@@@
    @@@@@F::::::::FF@@@@@@@@@@@i::::::i@@gg::::::::::::::g@m::::m@@@m::::m@@@m::::m@a::::::::::aa:::a@@@@@@@@@@@@@tt:::::::::::tt@oo:::::::::::oo@@@@@@R::::::R@@@@@R:::::R@oo:::::::::::oo@b:::::::::::::::b@@l::::::l@oo:::::::::::oox:::::x@@@@x:::::x@@@@@@
    @@@@@FFFFFFFFFFF@@@@@@@@@@@iiiiiiii@@@@gggggggg::::::g@mmmmmm@@@mmmmmm@@@mmmmmm@@aaaaaaaaaa@@aaaa@@@@@@@@@@@@@@@ttttttttttt@@@@@ooooooooooo@@@@@@@@RRRRRRRR@@@@@RRRRRRR@@@ooooooooooo@@@bbbbbbbbbbbbbbbb@@@llllllll@@@ooooooooooo@xxxxxxx@@@@@@xxxxxxx@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@g:::::g@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@gggggg@@@@@@g:::::g@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@g:::::gg@@@gg:::::g@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@g::::::ggg:::::::g@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@gg:::::::::::::g@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ggg::::::ggg@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@gggggg@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    Version 0.1.16
    By NoTwistedHere

    This plugin is free to use, report any bugs to me on Discord (NoTwistedHere#0001)
    (This is probably the worst code I've ever written, but it works)

    Limitations:
        Only supports linear gradients
        Only one fill colour per layer
        Effects are not supported (e.g. drop shadows, inner shadows, etc. May be added in the future)
        Vectors are not supported, only Rectangles, Ellipses, and Text (lines are partially supported)

    Known Issues:

*/

var HandledError = false;
var CurrentNotif;
var ImageExports = {};
var QueuedImages = 0;

function QuickClose(Message) {
    if (CurrentNotif !== undefined) CurrentNotif.cancel();

    HandledError = true;
    figma.notify(`Error: ` + Message, { timeout: 10000 });
    figma.closePlugin();

    throw new Error(Message);
}

function Notify(Message) {
    if (CurrentNotif !== undefined) CurrentNotif.cancel();

    CurrentNotif = figma.notify(Message);
}

function getGradientRotation(gradientTransform) {
    const a = gradientTransform[0][0];
    const b = gradientTransform[0][1];
    const angle = Math.atan2(b, a) * 180 / Math.PI;

    return angle >= 0 ? angle : angle + 360;
}

function LimitDecimals(Number, Decimals) { // Limit decimals to x places and round up/down
    if (typeof Number !== "number") return 0;
    if (isNaN(Number)) return 0;
    if (Decimals !== undefined && isNaN(Decimals)) Decimals = null;

    return parseFloat(Number.toFixed(Decimals));
}

const Fonts = {
    ["Thin"]: {
        Weight: 100,
        Style: "Normal",
    },
    ["ExtraLight"]: {
        Weight: 200,
        Style: "Normal",
    },
    ["Light"]: {
        Weight: 300,
        Style: "Normal",
    },
    ["Regular"]: {
        Weight: 400,
        Style: "Normal",
    },
    ["Medium"]: {
        Weight: 500,
        Style: "Normal",
    },
    ["SemiBold"]: {
        Weight: 600,
        Style: "Normal",
    },
    ["Bold"]: {
        Weight: 700,
        Style: "Normal",
    },
    ["ExtraBold"]: {
        Weight: 800,
        Style: "Normal",
    },
    ["Black"]: {
        Weight: 900,
        Style: "Normal",
    },
    ["Thin Italic"]: {
        Weight: 100,
        Style: "Italic",
    },
    ["ExtraLight Italic"]: {
        Weight: 200,
        Style: "Italic",
    },
    ["Light Italic"]: {
        Weight: 300,
        Style: "Italic",
    },
    ["Italic"]: { // Regular Italic
        Weight: 400,
        Style: "Italic",
    },
    ["Medium Italic"]: {
        Weight: 500,
        Style: "Italic",
    },
    ["SemiBold Italic"]: {
        Weight: 600,
        Style: "Italic",
    },
    ["Bold Italic"]: {
        Weight: 700,
        Style: "Italic",
    },
    ["ExtraBold Italic"]: {
        Weight: 800,
        Style: "Italic",
    },
    ["Black Italic"]: {
        Weight: 900,
        Style: "Italic",
    },
}

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

function Random() {
    return ((Math.random() * Math.random()) * 9e15) ^ Math.random(); // It's good enough
}

function ExportImage(Element, Properties, CustomExport) {
    QueuedImages++;

    const Name = CustomExport ? CustomExport.suffix : Element.name;

    Element.exportAsync(CustomExport || { format: "PNG", contentsOnly: true, constraint: { type: "SCALE", value: 2 } }).then(Bytes => {
        var UploadId = Random();

        while (ImageExports[UploadId] !== undefined) UploadId = Random();

        for (var i = 0; i < ImageExports.length; i++) {
            if (ImageExports[i].Bytes == Bytes) {
                UploadId = ImageExports[i].UploadId;
            }
        }

        Properties.UploadId = UploadId;

        ImageExports[UploadId] = {
            Bytes: Bytes, // Uint8Array
            UploadId: UploadId,
        };

        figma.ui.postMessage({
            type: "UploadImage",
            data: {
                ImageData: Bytes,
                UploadId: UploadId,
                ImageName: Name.replace(/EI[-]?/, ""),
                ImageFormat: CustomExport ? CustomExport.format : "PNG",
            },
        });
    });
}

const PropertyTypes = {
    ["children"]: (Element, Properties) => {
        if (Properties.NoChildren || Properties.Children == undefined || Properties.Class == "ImageLabel") return;

        for (var i = 0; i < Element.children.length; i++) {
            Properties.Children.push(GetMainProperties(Element.children[i], Properties));
        }

        /*
        // TODO: Re-implement masks
        var Mask = [];
        var Children = [];

        var children = Element.children // .reverse();

        for (var i = 0; i < children.length; i++) {
            if (children[i].isMask == true) {
                Mask.push(children[i]);
            } else {
                Children.push(children[i]);
            }
        }

        if (Mask.length > 1) {
            return QuickClose("Multiple masks are unsupported, on element: " + Element.name);
        } else if (Mask.length == 1) {
            var MaskProperties = ElementTypes["GROUP"](Mask[0], Properties) // GetMainProperties(Mask[0], Properties)

            MaskProperties.ClipsDescendants = true;

            for (var i = 0; i < Children.length; i++) {
                MaskProperties.Children.push(GetMainProperties(Children[i], MaskProperties));
            }

            Properties.Children.push(MaskProperties);
        }*/
    },
    ["exportSettings"]: (Element, Properties) => {
        const ExportSettings = Element.exportSettings[0];
        if (ExportSettings && Properties.Class !== "ImageLabel" && ExportSettings.suffix.match(/EI/)) {
            Properties.Class = "ImageLabel";
            Properties.ImageTransparency = Properties.BackgroundTransparency;
            Properties.BackgroundTransparency = 0;
            Properties.NoChildren = true;
            Properties.Children = undefined;

            if (ExportSettings.format !== "PNG" && ExportSettings.format !== "JPG") {
                return QuickClose("Unsupported image format: " + ExportSettings.format + ", on element: " + Element.name);
            }

            ExportImage(Element, Properties, ExportSettings);

            return true;
        }

        return false;
    },
    ["fills"]: (Element, Properties) => {
        if (Element.fills.length > 1) {
            return QuickClose("Multiple fills are unsupported, on element: " + Element.name);
        } else if (Element.fills.length == 0) {
            Properties.BackgroundColor3 = { R: 0, G: 0, B: 0 };
            Properties.BackgroundTransparency = 0;
        }

        const Filler = Element.fills[0];

        if (!Filler) return;

        switch (Filler.type) {
            case "SOLID":
                var Colour = {
                    R: Filler.color.r,
                    G: Filler.color.g,
                    B: Filler.color.b,
                };

                if (Properties.Class == "TextLabel") {
                    Properties.TextColor3 = Colour;
                } else {
                    Properties.BackgroundColor3 = Colour;
                }

                break;
            case "GRADIENT_LINEAR":
                if (Properties.Class == "TextLabel") {
                    Properties.TextColor3 = { R: 1, G: 1, B: 1 };
                } else {
                    Properties.BackgroundColor3 = { R: 1, G: 1, B: 1 };
                }

                const Transform = Filler.gradientTransform;
                const Rotation = getGradientRotation(Transform);

                Properties.Children.push({
                    Class: "UIGradient",
                    Type: "UIGradient",
                    Transparency: 1 - Filler.opacity,
                    Enabled: Filler.visible,
                    Colour: Filler.gradientStops.map((Stop) => {
                        return {
                            Colour: {
                                R: Stop.color.r,
                                G: Stop.color.g,
                                B: Stop.color.b,
                            },
                            TimePosition: Stop.position
                        }
                    }),
                    Transparency: Filler.gradientStops.map((Stop) => {
                        return {
                            Transparency: 1 - Stop.color.a, // Bastards for using RGBA (still love you though)
                            TimePosition: Stop.position
                        }
                    }),
                    Rotation: Rotation,
                    Children: []
                });

                break;
            case "IMAGE":
                if (Properties.Class !== "ImageLabel") {
                    Properties.Class = "ImageLabel";
                    Properties.BackgroundTransparency = 0;
                    Properties.ImageTransparency = Filler.opacity;

                    ExportImage(Element, Properties);
                }

                break;
            default:
                return QuickClose(`Unsupported fill type '${Filler.type}' for: ${Element.name}`);
        }
    },
    ["cornerRadius"]: (Element, Properties) => {
        if (Element.cornerRadius != 0) {
            Properties.Children.push({
                Class: "UICorner",
                Type: "UICorner",
                CornerRadius: {
                    S: 0,
                    O: Element.cornerRadius,
                },
                Children: []
            });
        }
    },
    ["fontName"]: (Element, Properties) => {
        const UsedFonts = Element.getStyledTextSegments(["fontName", "fontSize", "fontWeight", "fills"]);

        if (UsedFonts.length === 1) {
            Properties.Font = {
                Family: Element.fontName.family,
                Style: Element.fontName.style
            }
            return;
        }

        Properties.RichText = true;

        var PreviousFont;

        var NewText = "";

        function IsMulti(Font, property) {
            if (Element[property] !== figma.mixed || Element[property] === undefined || Element[property] === Font[property] || Font[property] === undefined) {
                return false;
            }

            return true;
        }

        function Check(Font) {
            const RblxFont = (Font.fontName && Fonts[Font.fontName.style]) || Fonts["Regular"];
            var NextTextSegment = "";
            var ExtraSegments = "";

            if (IsMulti(Font, "fontSize")) {
                NextTextSegment += `size="${Font.fontSize}" `;
            }

            if (IsMulti(Font, "fontName") && Font.fontName.family) {
                NextTextSegment += `family="rbxasset://fonts/families/${Font.fontName.family}.json" `;
            }

            if (IsMulti(Font, "fontName") && Font.fontName.style) {
                NextTextSegment += `style="${RblxFont.Style}" `;
            }

            if (IsMulti(Font, "fontWeight")) {
                NextTextSegment += `weight="${RblxFont.Weight}" `;
            }

            if (IsMulti(Font, "fills") && Font.fills.length > 0) {
                if (Font.fills[0].type !== "SOLID") {
                    console.warn("Gradient text is not supported.");
                } else {
                    var Colour = Font.fills[0].color;

                    NextTextSegment += `color="rgb(${LimitDecimals(Colour.r * 255)},${LimitDecimals(Colour.g * 255)},${LimitDecimals(Colour.b * 255)})" `;
                    NextTextSegment += `transparency="${1 - Font.fills[0].opacity}"`
                }
            }

            // End Segments
            // Special Segments

            if (IsMulti(Font, "textDecoration")) {
                switch (Font.textDecoration) {
                    case "UNDERLINE":
                        ExtraSegments += `<u>`;
                        break;
                    case "STRIKETHROUGH":
                        ExtraSegments += `<s>`;
                        break;
                }
            }

            // End Special Segments

            if (NextTextSegment.length > 0) NewText += `<font ${NextTextSegment}>`

            NewText += ExtraSegments + `${Font.characters}` + ExtraSegments.replace("<", "</");

            if (NextTextSegment.length > 0) NewText += `</font>`
        }

        for (var i = 0; i < UsedFonts.length; i++) {
            const Font = UsedFonts[i];

            Check(Font);
        }

        Properties.Text = "<![CDATA[" + NewText + "]]>";
    },
    ["strokes"]: (Element, Properties) => {
        if (Element.strokes.length == 0) {
            return;
        }
        const Stroke = Element.strokes[0];

        if ((Stroke.type !== "SOLID" && Stroke.type !== "GRADIENT_LINEAR") || Stroke.visible === false) return;

        if (Stroke.type === "GRADIENT_LINEAR") {
            const Transform = Stroke.gradientTransform;
            const Rotation = getGradientRotation(Transform);

            Properties.Children.push({
                Class: "UIStroke",
                Type: "UIStroke",
                Colour: {
                    R: 1,
                    G: 1,
                    B: 1,
                },
                Transparency: Element.opacity,
                Thickness: Element.strokeWeight,
                //LineJoinMode: Element.strokeJoin.substring(0, 1).toUpperCase() + Element.strokeJoin.substring(1).toLowerCase(),
                Children: [{
                    Class: "UIGradient",
                    Type: "UIGradient",
                    Transparency: 1 - Stroke.opacity,
                    Enabled: Stroke.visible,
                    Colour: Stroke.gradientStops.map((Stop) => {
                        return {
                            Colour: {
                                R: Stop.color.r,
                                G: Stop.color.g,
                                B: Stop.color.b,
                            },
                            TimePosition: Stop.position
                        }
                    }),
                    Transparency: Stroke.gradientStops.map((Stop) => {
                        return {
                            Transparency: 1 - Stop.color.a, // Bastards for using RGBA
                            TimePosition: Stop.position
                        }
                    }),
                    Rotation: Rotation,
                    Children: []
                }]
            });

            return;
        }

        Properties.Children.push({
            Class: "UIStroke",
            Type: "UIStroke",
            Colour: {
                R: Stroke.color.r || 1,
                G: Stroke.color.g || 1,
                B: Stroke.color.b || 1,
            },
            Transparency: Element.opacity,
            Thickness: Element.strokeWeight,
            //LineJoinMode: Element.strokeJoin.substring(0, 1).toUpperCase() + Element.strokeJoin.substring(1).toLowerCase(),
            Children: []
        });
    }
}

const ElementTypes = {
    ["GROUP"]: (Element, Parent) => {
        var Properties = {
            Class: "Frame",
            Type: Element.type,
            Name: Element.name,
            BackgroundTransparency: 0,
            BorderSizePixel: 0,
            GroupOpacity: Element.opacity,
            Visible: Element.visible,
            _OriginalPosition: {
                X: Element.x,
                Y: Element.y
            },
            Position: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            Children: [],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.GroupOpacity = Parent.GroupOpacity * Properties.GroupOpacity; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }
        }

        if (PropertyTypes["exportSettings"](Element, Properties) === false) {
            for (const Property in Element) {
                if (Property in PropertyTypes) {
                    if (Property === "exportSettings") continue; // Already done
                    if (PropertyTypes[Property](Element, Properties) === false) return false;
                }
            }
        }

        return Properties;
    },
    ["FRAME"]: (Element, Parent) => {
        var Properties = {
            Class: "Frame",
            Type: Element.type,
            Name: Element.name,
            BackgroundTransparency: Element.opacity,
            BorderSizePixel: 0,
            GroupOpacity: Element.opacity,
            Visible: Element.visible,
            Position: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            Rotation: -Element.rotation,
            Children: [],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.GroupOpacity = Parent.GroupOpacity * Properties.GroupOpacity; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }

            Properties.BackgroundTransparency = Properties.GroupOpacity // simple fix
        }

        if (PropertyTypes["exportSettings"](Element, Properties) === false) {
            for (const Property in Element) {
                if (Property in PropertyTypes) {
                    if (Property === "exportSettings") continue; // Already done
                    if (PropertyTypes[Property](Element, Properties) === false) return false;
                }
            }
        }

        return Properties;
    },
    ["RECTANGLE"]: (Element, Parent) => {
        var Properties = {
            Class: "Frame",
            Type: Element.type,
            Name: Element.name,
            BackgroundTransparency: Element.opacity,
            BorderSizePixel: 0,
            Visible: Element.visible,
            Position: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            Rotation: -Element.rotation,
            Children: [],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.BackgroundTransparency = Parent.GroupOpacity * Properties.BackgroundTransparency; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }
        }

        if (PropertyTypes["exportSettings"](Element, Properties) === false) {
            for (const Property in Element) {
                if (Property in PropertyTypes) {
                    if (Property === "exportSettings") continue; // Already done
                    if (PropertyTypes[Property](Element, Properties) === false) return false;
                }
            }
        }

        return Properties;
    },
    ["ELLIPSE"]: (Element, Parent) => {
        var Properties = {
            Class: "Frame",
            Type: Element.type,
            Name: Element.name,
            BackgroundTransparency: Element.opacity,
            BorderSizePixel: 0,
            Visible: Element.visible,
            Position: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            Rotation: Element.rotation,
            Children: [
                {
                    Class: "UICorner",
                    Type: "UICorner",
                    CornerRadius: {
                        S: 1,
                        O: 0,
                    }
                }
            ],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.BackgroundTransparency = Parent.GroupOpacity * Properties.BackgroundTransparency; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }
        }

        if (PropertyTypes["exportSettings"](Element, Properties) === false) {
            for (const Property in Element) {
                if (Property in PropertyTypes) {
                    if (Property === "exportSettings") continue; // Already done
                    if (PropertyTypes[Property](Element, Properties) === false) return false;
                }
            }
        }

        return Properties;
    },
    ["TEXT"]: (Element, Parent) => {
        /*
            === WARNING ===

            Some fonts are not supported by Roblox.
            
            If you don't see the text in Roblox, check the following:

                Check the output for a message saying "Temp read failed"
                if FontFace says "Temp read failed."" This means the font is not supported. (in a red boarder)
                if FontFace/Weight says "(unavailable)" This means the font style is not supported.
        */

        var Properties = {
            Class: "TextLabel",
            Type: Element.type,
            Name: Element.name,
            BackgroundTransparency: 0,
            BorderSizePixel: 0,
            TextTransparency: Element.opacity,
            Visible: Element.visible,
            Position: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            TextSize: Element.fontSize == figma.mixed ? 0 : Element.fontSize,
            TextXAlignment: Element.textAlignHorizontal,
            TextYAlignment: Element.textAlignVertical,
            Text: Element.characters,
            Rotation: Element.rotation,
            Children: [],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.TextTransparency = Parent.GroupOpacity * Properties.TextTransparency; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }
        }

        if (PropertyTypes["exportSettings"](Element, Properties) === false) {
            for (const Property in Element) {
                if (Property in PropertyTypes) {
                    if (Property === "exportSettings") continue; // Already done
                    if (PropertyTypes[Property](Element, Properties) === false) return false;
                }
            }
        }

        return Properties;
    },
    ["OTHER"]: (Element, Parent) => {
        var Properties = {
            Class: "ImageLabel",
            Type: Element.type,
            Name: Element.name,
            BackgroundTransparency: 0,
            ImageTransparency: Element.opacity,
            Visible: Element.visible,
            Position: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            Rotation: Element.rotation,
            Children: [],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.ImageTransparency = Parent.GroupOpacity * Properties.ImageTransparency; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }
        }

        if (Element["children"]) PropertyTypes["children"](Element, Properties);

        ExportImage(Element, Properties);

        return Properties;
    }
}

// ^^ Couldn't get this to work, so I just copied the code from Conversions.js

function CreateRobloxElement(Properties) { // Creates the roblox xml for the element
    var XML = "";

    function ExtendXML(String) {
        XML += String;
    }

    ExtendXML(`<Item class="${Properties.Class}" referent="RBX0">`);
    ExtendXML(`<Properties>`);

    // Add properties

    ExtendXML(`<string name="Name">${(Properties.Name || Properties.Class || "Unknown").replace("\n", "")}</string>`);

    if (Properties.BackgroundColor3 !== undefined) {
        var Colour = Properties.BackgroundColor3;

        for (const Property in Colour) {
            Colour[Property] = LimitDecimals(Colour[Property], 6);
        }

        ExtendXML(`<Color3 name="BackgroundColor3"><R>${Colour.R}</R><G>${Colour.G}</G><B>${Colour.B}</B></Color3>`);
    }

    if (Properties.TextColor3 !== undefined) {
        var Colour = Properties.TextColor3;

        for (const Property in Colour) {
            Colour[Property] = LimitDecimals(Colour[Property], 6);
        }

        ExtendXML(`<Color3 name="TextColor3"><R>${Colour.R}</R><G>${Colour.G}</G><B>${Colour.B}</B></Color3>`);
    }

    if (Properties.Colour !== undefined) {
        var Colour = Properties.Colour;

        if (Colour["R"] !== undefined) {
            for (const Property in Colour) {
                Colour[Property] = LimitDecimals(Colour[Property], 6);
            }

            ExtendXML(`<Color3 name="Color"><R>${Colour.R}</R><G>${Colour.G}</G><B>${Colour.B}</B></Color3>`);
        } else {
            var ColourSeq = "";
            var Previous;

            for (var i = 0; i < Colour.length; i++) {
                const ColourStop = Colour[i];
                var ColourVal = ColourStop.Colour;

                for (const Property in ColourVal) {
                    ColourVal[Property] = LimitDecimals(ColourVal[Property], 6);
                }

                if (i === 0 && ColourStop.TimePosition !== 0) ColourSeq += `0 ${ColourVal.R} ${ColourVal.G} ${ColourVal.B} 0 `; // Add the first keyframe (if it doesn't exist

                Previous = ColourStop;
                ColourSeq += `${ColourStop.TimePosition} ${ColourVal.R} ${ColourVal.G} ${ColourVal.B} 0 `;
            }

            if (Previous.TimePosition !== 1) ColourSeq += `1 ${Previous.Colour.R} ${Previous.Colour.G} ${Previous.Colour.B} 0 `; // Add the last keyframe (if it doesn't exist)

            ExtendXML(`<ColorSequence name="Color">${ColourSeq}</ColorSequence>`);
        }
    }

    if (Properties.Transparency !== undefined) {
        const Transparency = Properties.Transparency;

        if (!Array.isArray(Transparency)) ExtendXML(`<float name="Transparency">${1 - LimitDecimals(Properties.Transparency, 3)}</float>`);
        else {
            var NumberSequence = "";
            var Previous;

            for (var i = 0; i < Transparency.length; i++) {
                var TransparencyStop = Transparency[i];

                if (i === 0 && TransparencyStop.TimePosition !== 0) NumberSequence += `0 ${LimitDecimals(TransparencyStop.Transparency, 3)} 0 `; // Add the first keyframe (if it doesn't exist

                Previous = TransparencyStop;
                NumberSequence += `${TransparencyStop.TimePosition} ${LimitDecimals(TransparencyStop.Transparency, 3)} 0 `;
            }

            if (Previous.TimePosition !== 1) NumberSequence += `1 ${Previous.Transparency} 0 `; // Add the last keyframe (if it doesn't exist)

            ExtendXML(`<NumberSequence name="Transparency">${NumberSequence}</NumberSequence>`);
        }
    }

    if (Properties.Size !== undefined) {
        var Size = Properties.Size;
        ExtendXML(`<UDim2 name="Size"><XS>0</XS><XO>${LimitDecimals(Size.X, 0)}</XO><YS>0</YS><YO>${LimitDecimals(Size.Y, 0)}</YO></UDim2>`);
    }

    if (Properties.Class != "ImageLabel" && Properties.Rotation !== undefined && Properties.Rotation !== 0) {
        ExtendXML(`<float name="Rotation">${LimitDecimals(Properties.Rotation, 3)}</float>`);

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
        ExtendXML(`<UDim2 name="Position"><XS>0</XS><XO>${LimitDecimals(Position.X, 0)}</XO><YS>0</YS><YO>${LimitDecimals(Position.Y, 0)}</YO></UDim2>`);
    }

    if (Properties.BackgroundTransparency !== undefined) ExtendXML(`<float name="BackgroundTransparency">${1 - LimitDecimals(Properties.BackgroundTransparency, 3)}</float>`);
    if (Properties.Thickness !== undefined) ExtendXML(`<float name="Thickness">${LimitDecimals(Properties.Thickness, 0)}</float>`);
    if (Properties.LineJoinMode !== undefined) ExtendXML(`<Enum name="LineJoinMode">${LineJoinModes.indexOf(Properties.LineJoinMode)}</Enum>`);
    if (Properties.CornerRadius !== undefined) ExtendXML(`<UDim2 name="CornerRadius"><S>${LimitDecimals(Properties.CornerRadius.S, 0)}</S><O>${LimitDecimals(Properties.CornerRadius.O, 0)}</O></UDim2>`);
    if (Properties.BorderSizePixel !== undefined) ExtendXML(`<int name="BorderSizePixel">${LimitDecimals(Properties.BorderSizePixel, 0)}</int>`);
    if (Properties.ClipsDescendants !== undefined) ExtendXML(`<bool name="ClipsDescendants">${Properties.ClipsDescendants}</bool>`);
    if (Properties.TextTransparency !== undefined) ExtendXML(`<float name="TextTransparency">${1 - Properties.TextTransparency}</float>`);
    if (Properties.TextSize !== undefined) ExtendXML(`<int name="TextSize">${LimitDecimals(Properties.TextSize, 0)}</int>`);
    if (Properties.Text !== undefined) ExtendXML(`<string name="Text">${Properties.Text}</string>`);
    if (Properties.TextWrapped !== undefined) ExtendXML(`<bool name="TextWrapped">${Properties.TextWrapped}</bool>`);
    if (Properties.TextScaled !== undefined) ExtendXML(`<bool name="TextScaled">${Properties.TextScaled}</bool>`);
    if (Properties.TextStrokeTransparency !== undefined) ExtendXML(`<float name="TextStrokeTransparency">${1 - Properties.TextStrokeTransparency}</float>`);
    if (Properties.TextStrokeColor3 !== undefined) ExtendXML(`<Color3 name="TextStrokeColor3"><R>${LimitDecimals(Properties.TextStrokeColor3.R, 3)}</R><G>${LimitDecimals(Properties.TextStrokeColor3.G, 3)}</G><B>${LimitDecimals(Properties.TextStrokeColor3.B, 3)}</B></Color3>`);
    if (Properties.TextXAlignment !== undefined) ExtendXML(`<token name="TextXAlignment">${TextXAlignments.indexOf(Properties.TextXAlignment)}</token>`);
    if (Properties.TextYAlignment !== undefined) ExtendXML(`<token name="TextYAlignment">${TextYAlignments.indexOf(Properties.TextYAlignment)}</token>`);
    if (Properties.Font !== undefined) {
        const Font = Fonts[Properties.Font.Style] || Fonts["Regular"];
        ExtendXML(`<Font name="FontFace"><Family><url>rbxasset://fonts/families/${Properties.Font.Family}.json</url></Family><Weight>${Font.Weight}</Weight><Style>${Font.Style}</Style></Font>`);
    }
    if (Properties.RichText !== undefined) ExtendXML(`<bool name="RichText">${Properties.RichText}</bool>`);
    if (Properties.UploadId !== undefined && ImageExports[Properties.UploadId] !== undefined) ExtendXML(`<string name="Image"><url>${ImageExports[Properties.UploadId].ImageId}</url></string>`); // Image is exported
    else if (Properties.Image !== undefined) ExtendXML(`<string name="Image">${Properties.Image}</string>`); // Image is not exported
    if (Properties.ImageTransparency !== undefined) ExtendXML(`<float name="ImageTransparency">${1 - LimitDecimals(Properties.ImageTransparency, 3)}</float>`);
    if (Properties.Visible !== undefined) ExtendXML(`<bool name="Visible">${Properties.Visible}</bool>`);
    if (Properties.Enabled !== undefined) ExtendXML(`<bool name="Enabled">${Properties.Enabled}</bool>`);

    // End of properties

    ExtendXML("</Properties>");

    // Add children

    if (Properties.Children !== undefined && Properties.Children.length > 0 && Properties.NoChildren === undefined) {
        for (var i = 0; i < Properties.Children.length; i++) {
            ExtendXML(CreateRobloxElement(Properties.Children[i], i));
        }
    }

    return XML + "</Item>";
}

function ConvertToRoblox(Objects) { // Converts the objects into roblox xml format
    var XML = '<!--\n\tGenerated by Figma to Roblox\n\tReport any bugs/issues to NoTwistedHere#6703\n-->\n\n<roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4"><Meta name="ExplicitAutoJoints">true</Meta>';

    for (var i = 0; i < Objects.length; i++) {
        XML += CreateRobloxElement(Objects[i]);
    }

    return XML + '</roblox>';
}

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
    return `UDim.new(${LimitDecimals(udim.S, 0)}, ${LimitDecimals(udim.O, 0)})`;
}

function createUDim2FusionFunction(udim2) {
    return `UDim2.fromOffset(${LimitDecimals(udim2.X, 0)}, ${LimitDecimals(udim2.Y, 0)})`;
}

function createEnumFusionFunction(enumName) {
    const formattedEnumName = formatCase(enumName);
    return `Enum.${formattedEnumName}`;
}

function createTransparencyFusionFunction(number) {
    return 1 - LimitDecimals(number, 3);
}

function createPixelSizeFusionFunction(number) {
    return LimitDecimals(number, 0);
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
    const r = LimitDecimals(color.R * 255, 0);
    const g = LimitDecimals(color.G * 255, 0);
    const b = LimitDecimals(color.B * 255, 0);
    return `Color3.fromRGB(${r}, ${g}, ${b})`;
}

function addIndentation(str, depth = 1) {
    const lines = str.split('\n');
    const indent = '\t'.repeat(depth);

    const indentedLines = lines.map(line => indent + line);
    return indentedLines.join('\n');
}

function PropertyToFusion(propertyName, propertyValue) {
    if (propertyValue !== undefined) {
        if (FusionFunctionCreators[propertyName] !== undefined) {
            propertyValue = FusionFunctionCreators[propertyName](propertyValue)
        }
        return `\n${propertyName} = ${propertyValue},`
    } else
        return ""
}

function CreateFusionElement(Properties) { // Creates the fusion code for the element
    var FUSION_CODE = "";

    function ExtendCode(str) {
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
        ExtendCode(PropertyToFusion(property.key, property.value ? property.value : Properties[property.key]));
    }

    if (Properties.UploadId !== undefined && ImageExports[Properties.UploadId] !== undefined)
        ExtendCode(PropertyToFusion("Image", ImageExports[Properties.UploadId].ImageId))

    if (Properties.Colour !== undefined) {
        var Colour = Properties.Colour;

        if (Colour["R"] !== undefined) {
            ExtendCode(PropertyToFusion("Color", Properties.Colour))
        } else {
            const keyframeCount = Colour.length;
            if (keyframeCount == 1) {
                ExtendCode(`\nColor = ColorSequence.new(${get255Color(Colour[i])}),`)
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
                ExtendCode(`\nColor = ${ColourSeq},`)
            }
        }
    }

    if (Properties.Transparency !== undefined) {
        const Transparency = Properties.Transparency;

        if (!Array.isArray(Transparency))
            ExtendCode(PropertyToFusion("Transparency", Transparency))
        else {
            const keyframeCount = Colour.length;
            if (keyframeCount == 1) {
                ExtendCode(`\nnTransparency = NumberSequence.new(${LimitDecimals(transparency, 3)}),`)
            } else {
                var NumberSeq = "NumberSequence.new({";

                function addKeypoint(time, transparency) {
                    NumberSeq += `\n\tNumberSequenceKeypoint.new(${time}, ${LimitDecimals(transparency, 3)}),`;
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
                ExtendCode(`\nTransparency = ${NumberSeq},`)
            }
        }
    }

    if (Properties.Class != "ImageLabel" && Properties.Rotation !== undefined && Properties.Rotation !== 0) {
        ExtendCode(PropertyToFusion("Rotation", LimitDecimals(Properties.Rotation, 3)))

        if (Properties.Position !== undefined && Properties.Size !== undefined) {
            var Size = Properties.Size;
            var BoundingBox = Properties.Element.absoluteBoundingBox;

            Properties.Position = {
                X: Properties.Position.X + ((BoundingBox.width - Size.X) / 2),
                Y: Properties.Position.Y + ((BoundingBox.height - Size.Y) / 2)
            }
        }
    }

    //ExtendCode(PropertyToFusion("FontFace", Properties.Font))

    // Add children
    if (Properties.Children !== undefined && Properties.Children.length > 0 && Properties.NoChildren === undefined) {
        ExtendCode("\n[Children] = {\n")
        for (var i = 0; i < Properties.Children.length; i++) {
            ExtendCode(addIndentation(CreateFusionElement(Properties.Children[i], i)) + ",\n");
        }
        ExtendCode("}")
    }

    // Add indentation
    return `New("${Properties.Class}")({${addIndentation(FUSION_CODE)}\n})`;;
}

function ConvertToFusion(Objects) { // Converts the objects into fusion code format
    var FUSION_CODE = ``
    for (var i = 0; i < Objects.length; i++) {
        FUSION_CODE += CreateFusionElement(Objects[i]);
    }

    return FUSION_CODE;
}

function GetMainProperties(Object, Parent) {
    if (ElementTypes[Object.type] !== undefined) {
        return ElementTypes[Object.type](Object, Parent);
    } else return ElementTypes["OTHER"](Object, Parent);
}

async function RunPlugin() {
    // Get selected elements

    var SelectedElements = figma.currentPage.selection;

    if (SelectedElements.length == 0) {
        return QuickClose("No elements selected");
    }

    // Get main properties

    Notify("Converting...")

    var Objects = [];

    for (var i = 0; i < SelectedElements.length; i++) {
        Objects.push(GetMainProperties(SelectedElements[i]));
    }

    Notify("Uploading Images...")

    while (QueuedImages > 0) await new Promise(resolve => setTimeout(resolve, 250));

    Notify("Formatting...");

    var FILE = ConvertToFusion(Objects);

    Objects = null;

    if (FILE === false) {
        return;
    }

    figma.ui.postMessage({
        type: "Download",
        data: FILE
    });
    FILE = null;

    Notify("Successfully converted!");
}

figma.showUI(__html__);

figma.ui.onmessage = msg => {
    switch (msg.type) {
        case "exec":
            try {
                RunPlugin();
            } catch (e) {
                if (!HandledError) {
                    throw e;
                }

                console.warn(e);
            }
            break;
        case "close-plugin":
            figma.closePlugin();
            break;
        case "SetAsync":
            figma.clientStorage.setAsync(msg.key, msg.value);
            break;
        case "FetchAsync":
            figma.clientStorage.keysAsync().then(keys => {
                for (var i = 0; i < keys.length; i++) {
                    const Key = keys[i];
                    figma.clientStorage.getAsync(Key).then(value => {
                        figma.ui.postMessage({
                            type: "GetAsync",
                            data: {
                                key: Key,
                                value: value
                            }
                        });
                    });
                }
            });
            break;
        case "image-upload-success":
            ImageExports[msg.data.UploadId].ImageId = "rbxassetid://" + msg.data.response.assetId;
            QueuedImages--;
            break;
        case "image-upload-fail":
            QueuedImages--;
            console.warn(`Failed to upload image`);
            break;
    }
}