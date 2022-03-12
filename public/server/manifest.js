export const manifest = {
	appDir: "_app",
	assets: new Set(["discord.svg","favicon.ico","favicon.png","favicons/2/android-chrome-192x192.png","favicons/2/android-chrome-512x512.png","favicons/2/apple-touch-icon.png","favicons/2/favicon-16x16.png","favicons/2/favicon-32x32.png","favicons/2/favicon.ico","favicons/2/site.webmanifest","favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/site.webmanifest","fonts/Cairo/Cairo-VariableFont_wght.ttf","fonts/Cairo/OFL.txt","fonts/Cairo/README.txt","fonts/Cairo/static/Cairo-Black.ttf","fonts/Cairo/static/Cairo-Bold.ttf","fonts/Cairo/static/Cairo-ExtraBold.ttf","fonts/Cairo/static/Cairo-ExtraLight.ttf","fonts/Cairo/static/Cairo-Light.ttf","fonts/Cairo/static/Cairo-Medium.ttf","fonts/Cairo/static/Cairo-Regular.ttf","fonts/Cairo/static/Cairo-SemiBold.ttf","fonts/cairo.scss","fonts/eczar/Eczar-Bold.ttf","fonts/eczar/Eczar-ExtraBold.ttf","fonts/eczar/Eczar-Medium.ttf","fonts/eczar/Eczar-Regular.ttf","fonts/eczar/Eczar-SemiBold.ttf","fonts/eczar/OFL.txt","fonts/eczar.scss","fonts/fira-sans.scss","fonts/fira_sans/FiraSans-Black.ttf","fonts/fira_sans/FiraSans-BlackItalic.ttf","fonts/fira_sans/FiraSans-Bold.ttf","fonts/fira_sans/FiraSans-BoldItalic.ttf","fonts/fira_sans/FiraSans-ExtraBold.ttf","fonts/fira_sans/FiraSans-ExtraBoldItalic.ttf","fonts/fira_sans/FiraSans-ExtraLight.ttf","fonts/fira_sans/FiraSans-ExtraLightItalic.ttf","fonts/fira_sans/FiraSans-Italic.ttf","fonts/fira_sans/FiraSans-Light.ttf","fonts/fira_sans/FiraSans-LightItalic.ttf","fonts/fira_sans/FiraSans-Medium.ttf","fonts/fira_sans/FiraSans-MediumItalic.ttf","fonts/fira_sans/FiraSans-Regular.ttf","fonts/fira_sans/FiraSans-SemiBold.ttf","fonts/fira_sans/FiraSans-SemiBoldItalic.ttf","fonts/fira_sans/FiraSans-Thin.ttf","fonts/fira_sans/FiraSans-ThinItalic.ttf","fonts/fira_sans/OFL.txt","fonts/font-styles.css","fonts/Inconsolata/Inconsolata-VariableFont_wdth,wght.ttf","fonts/Inconsolata/OFL.txt","fonts/Inconsolata/README.txt","fonts/Inconsolata/static/Inconsolata/Inconsolata-Black.ttf","fonts/Inconsolata/static/Inconsolata/Inconsolata-Bold.ttf","fonts/Inconsolata/static/Inconsolata/Inconsolata-ExtraBold.ttf","fonts/Inconsolata/static/Inconsolata/Inconsolata-ExtraLight.ttf","fonts/Inconsolata/static/Inconsolata/Inconsolata-Light.ttf","fonts/Inconsolata/static/Inconsolata/Inconsolata-Medium.ttf","fonts/Inconsolata/static/Inconsolata/Inconsolata-Regular.ttf","fonts/Inconsolata/static/Inconsolata/Inconsolata-SemiBold.ttf","fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-Black.ttf","fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-Bold.ttf","fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-ExtraBold.ttf","fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-ExtraLight.ttf","fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-Light.ttf","fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-Medium.ttf","fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-Regular.ttf","fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-SemiBold.ttf","fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-Black.ttf","fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-Bold.ttf","fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-ExtraBold.ttf","fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-ExtraLight.ttf","fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-Light.ttf","fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-Medium.ttf","fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-Regular.ttf","fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-SemiBold.ttf","fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-Black.ttf","fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-Bold.ttf","fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-ExtraBold.ttf","fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-ExtraLight.ttf","fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-Light.ttf","fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-Medium.ttf","fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-Regular.ttf","fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-SemiBold.ttf","fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-Black.ttf","fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-Bold.ttf","fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-ExtraBold.ttf","fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-ExtraLight.ttf","fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-Light.ttf","fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-Medium.ttf","fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-Regular.ttf","fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-SemiBold.ttf","fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-Black.ttf","fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-Bold.ttf","fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-ExtraBold.ttf","fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-ExtraLight.ttf","fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-Light.ttf","fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-Medium.ttf","fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-Regular.ttf","fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-SemiBold.ttf","fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-Black.ttf","fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-Bold.ttf","fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-ExtraBold.ttf","fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-ExtraLight.ttf","fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-Light.ttf","fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-Medium.ttf","fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-Regular.ttf","fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-SemiBold.ttf","fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-Black.ttf","fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-Bold.ttf","fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-ExtraBold.ttf","fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-ExtraLight.ttf","fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-Light.ttf","fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-Medium.ttf","fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-Regular.ttf","fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-SemiBold.ttf","fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-Black.ttf","fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-Bold.ttf","fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-ExtraBold.ttf","fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-ExtraLight.ttf","fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-Light.ttf","fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-Medium.ttf","fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-Regular.ttf","fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-SemiBold.ttf","fonts/inconsolata.scss","fonts/inter/install-linux.txt","fonts/inter/install-mac.txt","fonts/inter/install-win.txt","fonts/inter/Inter Desktop/Inter-Black.otf","fonts/inter/Inter Desktop/Inter-BlackItalic.otf","fonts/inter/Inter Desktop/Inter-Bold.otf","fonts/inter/Inter Desktop/Inter-BoldItalic.otf","fonts/inter/Inter Desktop/Inter-ExtraBold.otf","fonts/inter/Inter Desktop/Inter-ExtraBoldItalic.otf","fonts/inter/Inter Desktop/Inter-ExtraLight.otf","fonts/inter/Inter Desktop/Inter-ExtraLightItalic.otf","fonts/inter/Inter Desktop/Inter-Italic.otf","fonts/inter/Inter Desktop/Inter-Light.otf","fonts/inter/Inter Desktop/Inter-LightItalic.otf","fonts/inter/Inter Desktop/Inter-Medium.otf","fonts/inter/Inter Desktop/Inter-MediumItalic.otf","fonts/inter/Inter Desktop/Inter-Regular.otf","fonts/inter/Inter Desktop/Inter-SemiBold.otf","fonts/inter/Inter Desktop/Inter-SemiBoldItalic.otf","fonts/inter/Inter Desktop/Inter-Thin.otf","fonts/inter/Inter Desktop/Inter-ThinItalic.otf","fonts/inter/Inter Desktop/Inter-V.ttf","fonts/inter/Inter Hinted for Windows/about hinted fonts.txt","fonts/inter/Inter Hinted for Windows/Desktop/Inter-Black.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-BlackItalic.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-Bold.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-BoldItalic.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-ExtraBold.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-ExtraBoldItalic.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-ExtraLight.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-ExtraLightItalic.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-Italic.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-Light.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-LightItalic.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-Medium.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-MediumItalic.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-Regular.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-SemiBold.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-SemiBoldItalic.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-Thin.ttf","fonts/inter/Inter Hinted for Windows/Desktop/Inter-ThinItalic.ttf","fonts/inter/Inter Hinted for Windows/Web/Inter-Black.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-Black.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-BlackItalic.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-BlackItalic.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-Bold.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-Bold.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-BoldItalic.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-BoldItalic.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-ExtraBold.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-ExtraBold.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-ExtraBoldItalic.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-ExtraBoldItalic.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-ExtraLight.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-ExtraLight.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-ExtraLightItalic.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-ExtraLightItalic.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-Italic.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-Italic.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-Light.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-Light.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-LightItalic.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-LightItalic.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-Medium.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-Medium.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-MediumItalic.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-MediumItalic.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-Regular.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-Regular.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-SemiBold.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-SemiBold.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-SemiBoldItalic.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-SemiBoldItalic.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-Thin.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-Thin.woff2","fonts/inter/Inter Hinted for Windows/Web/Inter-ThinItalic.woff","fonts/inter/Inter Hinted for Windows/Web/Inter-ThinItalic.woff2","fonts/inter/Inter Hinted for Windows/Web/inter.css","fonts/inter/Inter Variable/Inter.ttf","fonts/inter/Inter Variable/Single axis/Inter-italic.ttf","fonts/inter/Inter Variable/Single axis/Inter-roman.ttf","fonts/inter/Inter Web/Inter-Black.woff","fonts/inter/Inter Web/Inter-Black.woff2","fonts/inter/Inter Web/Inter-BlackItalic.woff","fonts/inter/Inter Web/Inter-BlackItalic.woff2","fonts/inter/Inter Web/Inter-Bold.woff","fonts/inter/Inter Web/Inter-Bold.woff2","fonts/inter/Inter Web/Inter-BoldItalic.woff","fonts/inter/Inter Web/Inter-BoldItalic.woff2","fonts/inter/Inter Web/Inter-ExtraBold.woff","fonts/inter/Inter Web/Inter-ExtraBold.woff2","fonts/inter/Inter Web/Inter-ExtraBoldItalic.woff","fonts/inter/Inter Web/Inter-ExtraBoldItalic.woff2","fonts/inter/Inter Web/Inter-ExtraLight.woff","fonts/inter/Inter Web/Inter-ExtraLight.woff2","fonts/inter/Inter Web/Inter-ExtraLightItalic.woff","fonts/inter/Inter Web/Inter-ExtraLightItalic.woff2","fonts/inter/Inter Web/Inter-italic.var.woff2","fonts/inter/Inter Web/Inter-Italic.woff","fonts/inter/Inter Web/Inter-Italic.woff2","fonts/inter/Inter Web/Inter-Light.woff","fonts/inter/Inter Web/Inter-Light.woff2","fonts/inter/Inter Web/Inter-LightItalic.woff","fonts/inter/Inter Web/Inter-LightItalic.woff2","fonts/inter/Inter Web/Inter-Medium.woff","fonts/inter/Inter Web/Inter-Medium.woff2","fonts/inter/Inter Web/Inter-MediumItalic.woff","fonts/inter/Inter Web/Inter-MediumItalic.woff2","fonts/inter/Inter Web/Inter-Regular.woff","fonts/inter/Inter Web/Inter-Regular.woff2","fonts/inter/Inter Web/Inter-roman.var.woff2","fonts/inter/Inter Web/Inter-SemiBold.woff","fonts/inter/Inter Web/Inter-SemiBold.woff2","fonts/inter/Inter Web/Inter-SemiBoldItalic.woff","fonts/inter/Inter Web/Inter-SemiBoldItalic.woff2","fonts/inter/Inter Web/Inter-Thin.woff","fonts/inter/Inter Web/Inter-Thin.woff2","fonts/inter/Inter Web/Inter-ThinItalic.woff","fonts/inter/Inter Web/Inter-ThinItalic.woff2","fonts/inter/Inter Web/inter.css","fonts/inter/Inter Web/Inter.var.woff2","fonts/inter/LICENSE.txt","fonts/inter.scss","fonts/josefin-sans.scss","fonts/Josefin_Sans/JosefinSans-Italic-VariableFont_wght.ttf","fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf","fonts/Josefin_Sans/OFL.txt","fonts/Josefin_Sans/README.txt","fonts/Josefin_Sans/static/JosefinSans-Bold.ttf","fonts/Josefin_Sans/static/JosefinSans-BoldItalic.ttf","fonts/Josefin_Sans/static/JosefinSans-ExtraLight.ttf","fonts/Josefin_Sans/static/JosefinSans-ExtraLightItalic.ttf","fonts/Josefin_Sans/static/JosefinSans-Italic.ttf","fonts/Josefin_Sans/static/JosefinSans-Light.ttf","fonts/Josefin_Sans/static/JosefinSans-LightItalic.ttf","fonts/Josefin_Sans/static/JosefinSans-Medium.ttf","fonts/Josefin_Sans/static/JosefinSans-MediumItalic.ttf","fonts/Josefin_Sans/static/JosefinSans-Regular.ttf","fonts/Josefin_Sans/static/JosefinSans-SemiBold.ttf","fonts/Josefin_Sans/static/JosefinSans-SemiBoldItalic.ttf","fonts/Josefin_Sans/static/JosefinSans-Thin.ttf","fonts/Josefin_Sans/static/JosefinSans-ThinItalic.ttf","fonts/Merriweather/Merriweather-Black.ttf","fonts/Merriweather/Merriweather-BlackItalic.ttf","fonts/Merriweather/Merriweather-Bold.ttf","fonts/Merriweather/Merriweather-BoldItalic.ttf","fonts/Merriweather/Merriweather-Italic.ttf","fonts/Merriweather/Merriweather-Light.ttf","fonts/Merriweather/Merriweather-LightItalic.ttf","fonts/Merriweather/Merriweather-Regular.ttf","fonts/Merriweather/OFL.txt","fonts/merriweather.scss","fonts/mixin-fontface.scss","fonts/Montserrat/Montserrat-Black.ttf","fonts/Montserrat/Montserrat-BlackItalic.ttf","fonts/Montserrat/Montserrat-Bold.ttf","fonts/Montserrat/Montserrat-BoldItalic.ttf","fonts/Montserrat/Montserrat-ExtraBold.ttf","fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf","fonts/Montserrat/Montserrat-ExtraLight.ttf","fonts/Montserrat/Montserrat-ExtraLightItalic.ttf","fonts/Montserrat/Montserrat-Italic.ttf","fonts/Montserrat/Montserrat-Light.ttf","fonts/Montserrat/Montserrat-LightItalic.ttf","fonts/Montserrat/Montserrat-Medium.ttf","fonts/Montserrat/Montserrat-MediumItalic.ttf","fonts/Montserrat/Montserrat-Regular.ttf","fonts/Montserrat/Montserrat-SemiBold.ttf","fonts/Montserrat/Montserrat-SemiBoldItalic.ttf","fonts/Montserrat/Montserrat-Thin.ttf","fonts/Montserrat/Montserrat-ThinItalic.ttf","fonts/Montserrat/OFL.txt","fonts/montserrat.scss","fonts/newsreader/Newsreader-Italic-VariableFont_opsz,wght.ttf","fonts/newsreader/Newsreader-VariableFont_opsz,wght.ttf","fonts/newsreader/OFL.txt","fonts/newsreader/README.txt","fonts/newsreader/static/Newsreader/Newsreader-Bold.ttf","fonts/newsreader/static/Newsreader/Newsreader-BoldItalic.ttf","fonts/newsreader/static/Newsreader/Newsreader-ExtraBold.ttf","fonts/newsreader/static/Newsreader/Newsreader-ExtraBoldItalic.ttf","fonts/newsreader/static/Newsreader/Newsreader-ExtraLight.ttf","fonts/newsreader/static/Newsreader/Newsreader-ExtraLightItalic.ttf","fonts/newsreader/static/Newsreader/Newsreader-Italic.ttf","fonts/newsreader/static/Newsreader/Newsreader-Light.ttf","fonts/newsreader/static/Newsreader/Newsreader-LightItalic.ttf","fonts/newsreader/static/Newsreader/Newsreader-Medium.ttf","fonts/newsreader/static/Newsreader/Newsreader-MediumItalic.ttf","fonts/newsreader/static/Newsreader/Newsreader-Regular.ttf","fonts/newsreader/static/Newsreader/Newsreader-SemiBold.ttf","fonts/newsreader/static/Newsreader/Newsreader-SemiBoldItalic.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-Bold.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-BoldItalic.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-ExtraBold.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-ExtraBoldItalic.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-ExtraLight.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-ExtraLightItalic.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-Italic.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-Light.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-LightItalic.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-Medium.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-MediumItalic.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-Regular.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-SemiBold.ttf","fonts/newsreader/static/Newsreader_24pt/Newsreader_24pt-SemiBoldItalic.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-Bold.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-BoldItalic.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-ExtraBold.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-ExtraBoldItalic.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-ExtraLight.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-ExtraLightItalic.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-Italic.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-Light.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-LightItalic.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-Medium.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-MediumItalic.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-Regular.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-SemiBold.ttf","fonts/newsreader/static/Newsreader_36pt/Newsreader_36pt-SemiBoldItalic.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-Bold.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-BoldItalic.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-ExtraBold.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-ExtraBoldItalic.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-ExtraLight.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-ExtraLightItalic.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-Italic.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-Light.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-LightItalic.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-Medium.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-MediumItalic.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-Regular.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-SemiBold.ttf","fonts/newsreader/static/Newsreader_60pt/Newsreader_60pt-SemiBoldItalic.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-Bold.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-BoldItalic.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-ExtraBold.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-ExtraBoldItalic.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-ExtraLight.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-ExtraLightItalic.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-Italic.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-Light.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-LightItalic.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-Medium.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-MediumItalic.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-Regular.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-SemiBold.ttf","fonts/newsreader/static/Newsreader_9pt/Newsreader_9pt-SemiBoldItalic.ttf","fonts/newsreader.scss","fonts/noto_sans_display/NotoSansDisplay-Italic-VariableFont_wdth,wght.ttf","fonts/noto_sans_display/NotoSansDisplay-VariableFont_wdth,wght.ttf","fonts/noto_sans_display/OFL.txt","fonts/noto_sans_display/README.txt","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-Black.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-BlackItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-Bold.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-BoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-ExtraBold.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-ExtraBoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-ExtraLight.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-ExtraLightItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-Italic.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-Light.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-LightItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-Medium.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-MediumItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-Regular.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-SemiBold.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-SemiBoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-Thin.ttf","fonts/noto_sans_display/static/NotoSansDisplay/NotoSansDisplay-ThinItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-Black.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-BlackItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-Bold.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-BoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-ExtraBold.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-ExtraBoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-ExtraLight.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-ExtraLightItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-Italic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-Light.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-LightItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-Medium.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-MediumItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-Regular.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-SemiBold.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-SemiBoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-Thin.ttf","fonts/noto_sans_display/static/NotoSansDisplay_Condensed/NotoSansDisplay_Condensed-ThinItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-Black.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-BlackItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-Bold.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-BoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-ExtraBold.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-ExtraBoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-ExtraLight.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-ExtraLightItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-Italic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-Light.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-LightItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-Medium.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-MediumItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-Regular.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-SemiBold.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-SemiBoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-Thin.ttf","fonts/noto_sans_display/static/NotoSansDisplay_ExtraCondensed/NotoSansDisplay_ExtraCondensed-ThinItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-Black.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-BlackItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-Bold.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-BoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-ExtraBold.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-ExtraBoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-ExtraLight.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-ExtraLightItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-Italic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-Light.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-LightItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-Medium.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-MediumItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-Regular.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-SemiBold.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-SemiBoldItalic.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-Thin.ttf","fonts/noto_sans_display/static/NotoSansDisplay_SemiCondensed/NotoSansDisplay_SemiCondensed-ThinItalic.ttf","fonts/Noto_Serif/NotoSerif-Bold.ttf","fonts/Noto_Serif/NotoSerif-BoldItalic.ttf","fonts/Noto_Serif/NotoSerif-Italic.ttf","fonts/Noto_Serif/NotoSerif-Regular.ttf","fonts/Noto_Serif/OFL.txt","fonts/open-sans.scss","fonts/Open_Sans/LICENSE.txt","fonts/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf","fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf","fonts/Open_Sans/README.txt","fonts/Open_Sans/static/OpenSans/OpenSans-Bold.ttf","fonts/Open_Sans/static/OpenSans/OpenSans-BoldItalic.ttf","fonts/Open_Sans/static/OpenSans/OpenSans-ExtraBold.ttf","fonts/Open_Sans/static/OpenSans/OpenSans-ExtraBoldItalic.ttf","fonts/Open_Sans/static/OpenSans/OpenSans-Italic.ttf","fonts/Open_Sans/static/OpenSans/OpenSans-Light.ttf","fonts/Open_Sans/static/OpenSans/OpenSans-LightItalic.ttf","fonts/Open_Sans/static/OpenSans/OpenSans-Medium.ttf","fonts/Open_Sans/static/OpenSans/OpenSans-MediumItalic.ttf","fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf","fonts/Open_Sans/static/OpenSans/OpenSans-SemiBold.ttf","fonts/Open_Sans/static/OpenSans/OpenSans-SemiBoldItalic.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-Bold.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-BoldItalic.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-ExtraBold.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-ExtraBoldItalic.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-Italic.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-Light.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-LightItalic.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-Medium.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-MediumItalic.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-Regular.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-SemiBold.ttf","fonts/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-SemiBoldItalic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-Bold.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-BoldItalic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-ExtraBold.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-ExtraBoldItalic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-Italic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-Light.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-LightItalic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-Medium.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-MediumItalic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-Regular.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-SemiBold.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed/OpenSans_SemiCondensed-SemiBoldItalic.ttf","fonts/Vollkorn/OFL.txt","fonts/Vollkorn/README.txt","fonts/Vollkorn/static/Vollkorn-Black.ttf","fonts/Vollkorn/static/Vollkorn-BlackItalic.ttf","fonts/Vollkorn/static/Vollkorn-Bold.ttf","fonts/Vollkorn/static/Vollkorn-BoldItalic.ttf","fonts/Vollkorn/static/Vollkorn-ExtraBold.ttf","fonts/Vollkorn/static/Vollkorn-ExtraBoldItalic.ttf","fonts/Vollkorn/static/Vollkorn-Italic.ttf","fonts/Vollkorn/static/Vollkorn-Medium.ttf","fonts/Vollkorn/static/Vollkorn-MediumItalic.ttf","fonts/Vollkorn/static/Vollkorn-Regular.ttf","fonts/Vollkorn/static/Vollkorn-SemiBold.ttf","fonts/Vollkorn/static/Vollkorn-SemiBoldItalic.ttf","fonts/Vollkorn/Vollkorn-Italic-VariableFont_wght.ttf","fonts/Vollkorn/Vollkorn-VariableFont_wght.ttf","fonts/vollkorn.scss","image (9).svg","images/1024px-Martin,_John_-_The_Seventh_Plague_-_1823.jpg","images/1200px-Paracas_National_Reserve._Ica,_Peru.jpg","images/1600-Iguazu-Falls-Argentina-shutterstock_172190801.jpg","images/20211101_151335.jpg","images/20211106_151003.jpg","images/20211110_125044.jpg","images/20211110_125818_HDR.jpg","images/6bc3782329c30397e0679ed81b807bd8.jpg","images/70.jpg","images/8040ebabaa90d7ac5908a1a50e7b7b40.jpg","images/8DCBD365-843F-48BE-A9CE-A058C8BA8A52.jpg","images/A69F230D-437F-426F-9D97-0011DADF82C8.jpg","images/Bay.of.Kotor.original.15947.jpg","images/d70b5760ef44f6214a9a8c2283170e281d871273.jpg","images/download-11.jfif","images/download-12.jfif","images/download-_11_.jpg","images/download-_12_.jpg","images/download-_18_.jpg","images/download-_19_.jpg","images/download-_1_.jpg","images/download-_22_.jpg","images/download-_8_.jpg","images/download.gif","images/Evening-light-on-Mount-Thor-in-Auyuittuq-National-Park-Nunavut-Baffin-Island.jpg","images/gettyimages-919352240-1024x1024.jpg","images/hvalfjorur-fjord.jpg","images/springbrook national park, australia-2.jpg","images/svaneti-georgia-min.jpg","images/Thor-Peak-The-Greatest-Vertical-Drop-on-Earth.jpg","images/vinicunza peru.jpg","pax-todo.md","quotes-todo.md","Quotes.html","schema full.graphql","schema quotes.graphql","svg/discord.svg","tippy-backdrop.css","tippy-shift-away.css","todo.md","upload index.json copy.js","upload index.json from dgraph code.js"]),
	_: {
		mime: {".svg":"image/svg+xml",".ico":"image/vnd.microsoft.icon",".png":"image/png",".webmanifest":"application/manifest+json",".ttf":"font/ttf",".txt":"text/plain",".scss":"text/x-scss",".css":"text/css",".otf":"font/otf",".woff":"font/woff",".woff2":"font/woff2",".jpg":"image/jpeg",".gif":"image/gif",".md":"text/markdown",".html":"text/html",".js":"application/javascript"},
		entry: {"file":"start-25c50fda.js","js":["start-25c50fda.js","chunks/vendor-0f79dfe6.js"],"css":["assets/vendor-e3c3bbbc.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js'),
			() => import('./nodes/32.js'),
			() => import('./nodes/33.js'),
			() => import('./nodes/34.js'),
			() => import('./nodes/35.js'),
			() => import('./nodes/36.js'),
			() => import('./nodes/37.js'),
			() => import('./nodes/38.js'),
			() => import('./nodes/39.js'),
			() => import('./nodes/40.js'),
			() => import('./nodes/41.js'),
			() => import('./nodes/42.js'),
			() => import('./nodes/43.js'),
			() => import('./nodes/44.js'),
			() => import('./nodes/45.js'),
			() => import('./nodes/46.js'),
			() => import('./nodes/47.js'),
			() => import('./nodes/48.js'),
			() => import('./nodes/49.js'),
			() => import('./nodes/50.js'),
			() => import('./nodes/51.js'),
			() => import('./nodes/52.js'),
			() => import('./nodes/53.js'),
			() => import('./nodes/54.js'),
			() => import('./nodes/55.js'),
			() => import('./nodes/56.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/metabrain-landing\/?$/,
				params: null,
				path: "/metabrain-landing",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/mikepeiman\/?$/,
				params: null,
				path: "/mikepeiman",
				a: [0,4,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/metabrain\/?$/,
				params: null,
				path: "/metabrain",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/metabrain\/?$/,
				params: null,
				path: "/metabrain",
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/?$/,
				params: null,
				path: "/creative",
				a: [0,8,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch01-preview\/?$/,
				params: null,
				path: "/creative/sketch01-preview",
				a: [0,8,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch02-preview\/?$/,
				params: null,
				path: "/creative/sketch02-preview",
				a: [0,8,11],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch03-preview\/?$/,
				params: null,
				path: "/creative/sketch03-preview",
				a: [0,8,12],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch01\/noPanel\/?$/,
				params: null,
				path: "/creative/sketch01/noPanel",
				a: [0,8,13],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch01\/?$/,
				params: null,
				path: "/creative/sketch01",
				a: [0,8,14],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch02\/noPanel\/?$/,
				params: null,
				path: "/creative/sketch02/noPanel",
				a: [0,8,15],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch02\/?$/,
				params: null,
				path: "/creative/sketch02",
				a: [0,8,16],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch03\/noPanel\/?$/,
				params: null,
				path: "/creative/sketch03/noPanel",
				a: [0,8,17],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch03\/?$/,
				params: null,
				path: "/creative/sketch03",
				a: [0,8,18],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch04\/noPanel\/?$/,
				params: null,
				path: "/creative/sketch04/noPanel",
				a: [0,8,19],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch04\/?$/,
				params: null,
				path: "/creative/sketch04",
				a: [0,8,20],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch05\/noPanel\/?$/,
				params: null,
				path: "/creative/sketch05/noPanel",
				a: [0,8,21],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch05\/?$/,
				params: null,
				path: "/creative/sketch05",
				a: [0,8,22],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch06\/noPanel\/?$/,
				params: null,
				path: "/creative/sketch06/noPanel",
				a: [0,8,23],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch06\/?$/,
				params: null,
				path: "/creative/sketch06",
				a: [0,8,24],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch07\/noPanel\/?$/,
				params: null,
				path: "/creative/sketch07/noPanel",
				a: [0,8,25],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch07\/?$/,
				params: null,
				path: "/creative/sketch07",
				a: [0,8,26],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch08\/noPanel\/?$/,
				params: null,
				path: "/creative/sketch08/noPanel",
				a: [0,8,27],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch08\/?$/,
				params: null,
				path: "/creative/sketch08",
				a: [0,8,28],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch09\/noPanel\/?$/,
				params: null,
				path: "/creative/sketch09/noPanel",
				a: [0,8,29],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/creative\/sketch09\/?$/,
				params: null,
				path: "/creative/sketch09",
				a: [0,8,30],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/sketch05\/?$/,
				params: null,
				path: "/sketch05",
				a: [0,31],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/favicon\/?$/,
				params: null,
				path: "/favicon",
				a: [0,32],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/ioredis\/?$/,
				params: null,
				path: "/ioredis",
				a: [0,33],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/ioredis\/client\/?$/,
				params: null,
				load: () => import('./entries/endpoints/ioredis/client.js')
			},
			{
				type: 'page',
				pattern: /^\/pokemon\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,34],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/pokemon\/?$/,
				params: null,
				path: "/pokemon",
				a: [0,35],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/quotes\.dgraph\.getQuote$/,
				params: null,
				load: () => import('./entries/endpoints/quotes/index.dgraph.getQuote.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/quotes\.dgraph\.json$/,
				params: null,
				load: () => import('./entries/endpoints/quotes/index.dgraph.json.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/quotes\.json$/,
				params: null,
				load: () => import('./entries/endpoints/quotes/index.json.js')
			},
			{
				type: 'page',
				pattern: /^\/quotes\/?$/,
				params: null,
				path: "/quotes",
				a: [0,36],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/quotes\/findNextSeparatingCharacter\/?$/,
				params: null,
				load: () => import('./entries/endpoints/quotes/findNextSeparatingCharacter.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/quotes\/parseQuotesRefactor\/?$/,
				params: null,
				load: () => import('./entries/endpoints/quotes/parseQuotesRefactor.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/quotes\/getMinNotFalse\/?$/,
				params: null,
				load: () => import('./entries/endpoints/quotes/getMinNotFalse.js')
			},
			{
				type: 'page',
				pattern: /^\/quotes\/DisplayQuotes\/?$/,
				params: null,
				path: "/quotes/DisplayQuotes",
				a: [0,37],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/quotes\/parseQuotes\/?$/,
				params: null,
				load: () => import('./entries/endpoints/quotes/parseQuotes.js')
			},
			{
				type: 'page',
				pattern: /^\/quotes\/parseQuotes\/?$/,
				params: null,
				path: "/quotes/parseQuotes",
				a: [0,38],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/quotes\/getAuthor\/?$/,
				params: null,
				load: () => import('./entries/endpoints/quotes/getAuthor.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/quotes\/parseFile\/?$/,
				params: null,
				load: () => import('./entries/endpoints/quotes/parseFile.js')
			},
			{
				type: 'page',
				pattern: /^\/quotes\/AddQuote\/?$/,
				params: null,
				path: "/quotes/AddQuote",
				a: [0,39],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/quotes\/upload\/?$/,
				params: null,
				path: "/quotes/upload",
				a: [0,40],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/upload\.json$/,
				params: null,
				load: () => import('./entries/endpoints/upload/index.json.js')
			},
			{
				type: 'page',
				pattern: /^\/upload\/?$/,
				params: null,
				path: "/upload",
				a: [0,41],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,42],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/color\/?$/,
				params: null,
				path: "/color",
				a: [0,43],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/login\/?$/,
				params: null,
				path: "/login",
				a: [0,44],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/redis\/?$/,
				params: null,
				path: "/redis",
				a: [0,45],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/redis\/client\/?$/,
				params: null,
				load: () => import('./entries/endpoints/redis/client.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/todos\.supabase\.json$/,
				params: null,
				load: () => import('./entries/endpoints/todos/index.supabase.json.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/todos\.dgraph\.json$/,
				params: null,
				load: () => import('./entries/endpoints/todos/index.dgraph.json.js')
			},
			{
				type: 'page',
				pattern: /^\/todos\/?$/,
				params: null,
				path: "/todos",
				a: [0,46],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/blog\.json$/,
				params: null,
				load: () => import('./entries/endpoints/blog/index.json.js')
			},
			{
				type: 'page',
				pattern: /^\/blog\/?$/,
				params: null,
				path: "/blog",
				a: [0,47,48],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/blog\/([^/]+?)\.json$/,
				params: (m) => ({ slug: m[1]}),
				load: () => import('./entries/endpoints/blog/_slug_.json.js')
			},
			{
				type: 'page',
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				a: [0,47,49],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/test\/test-([^/]+?)-([^/]+?)\/?$/,
				params: (m) => ({ person: m[1], age: m[2]}),
				load: () => import('./entries/endpoints/test/test-_person_-_age_.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/pokemon\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/pokemon/index.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/pokemon\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				load: () => import('./entries/endpoints/api/pokemon/_id_.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/heroes\.json$/,
				params: null,
				load: () => import('./entries/endpoints/api/heroes/index.json.js')
			},
			{
				type: 'page',
				pattern: /^\/pax\/?$/,
				params: null,
				path: "/pax",
				a: [0,50],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/pax\/honeycomb\/?$/,
				params: null,
				load: () => import('./entries/endpoints/pax/honeycomb.js')
			},
			{
				type: 'page',
				pattern: /^\/pax\/grid2\/?$/,
				params: null,
				path: "/pax/grid2",
				a: [0,51],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/pax\/zimjs\/?$/,
				params: null,
				path: "/pax/zimjs",
				a: [0,52],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/pax\/zimjs\/initzim\/?$/,
				params: null,
				load: () => import('./entries/endpoints/pax/zimjs/initzim.js')
			},
			{
				type: 'page',
				pattern: /^\/pax\/zimjs\/1\/?$/,
				params: null,
				path: "/pax/zimjs/1",
				a: [0,53],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/pax\/grid\/?$/,
				params: null,
				path: "/pax/grid",
				a: [0,54],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/pax\/grid\/?$/,
				params: null,
				load: () => import('./entries/endpoints/pax/grid.js')
			},
			{
				type: 'page',
				pattern: /^\/pax\/grid\/?$/,
				params: null,
				path: "/pax/grid",
				a: [0,55],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/([^/]+?)\/?$/,
				params: (m) => ({ fallback: m[1]}),
				path: null,
				a: [0,56],
				b: [1]
			}
		]
	}
};
