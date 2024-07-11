import React from "react";
import * as ReactDomClient from "react-dom/client";
import * as ReactRouterDom from "react-router-dom";
import * as ReactSpring from "react-spring";

(async function(): Promise<void> {
    let root: HTMLElement | null = document.getElementById("root");
    if (!root) {
        throw new Error("Unable to find root.");
    }
    let rootReactDom: ReactDomClient.Root = ReactDomClient.createRoot(root);
    rootReactDom.render(
        <ReactRouterDom.RouterProvider 
        router={ReactRouterDom.createBrowserRouter([{
            path: "/",
            element: <Page>
                <Navbar>
                    <AppName/>
                </Navbar>
                <HeroSection>
                    <Header/>
                    <BuyNowButton/>
                </HeroSection>
                <ContentSection>
                    <Paragraph text={"Experience a piece of cosmic history with our authentic moon rocks. These rare lunar fragments, collected during NASA's Apollo missions, offer a tangible connection to humanity's greatest adventure. Each specimen is meticulously verified and comes with a certificate of authenticity. Whether you're a space enthusiast, collector, or searching for a truly unique gift, our moon rocks provide an unparalleled opportunity to own a piece of the Moon. Bring the wonder of space exploration into your home today."}/>
                    <Paragraph text={"Embark on an otherworldly journey with our exclusive collection of lunar treasures. Each moon rock in our inventory is a silent witness to the vast expanse of space and the incredible feat of human exploration. These fragments, ranging from dust-sized particles to substantial chunks, showcase the Moon's unique geological composition. Our moon rocks aren't just collectibles; they're conversation starters, educational tools, and inspirational reminders of human potential. Whether displayed in a personal study, classroom, or corporate office, these celestial souvenirs bring a touch of the extraordinary to any setting."}/>
                    <Paragraph text={"Our moon rocks are more than just geological specimens; they're gateways to imagination and scientific wonder. Formed over billions of years in an environment vastly different from Earth, these fragments tell a story of cosmic impacts, ancient volcanism, and the Moon's complex history. Each piece in our collection has been carefully selected to showcase unique features - from glassy impact melts to ancient lunar highlands material. By owning a moon rock, you're not just acquiring a rare item, but also supporting space education and research initiatives. Let these lunar ambassadors inspire the next generation of astronomers, geologists, and space explorers in your life."}/>
                    <Paragraph text={"Discover the allure of the cosmos with our certified lunar samples. These rare fragments, sourced from NASA's historic Apollo missions, offer a tangible link to humanity's greatest leap. Each moon rock tells a unique story of our celestial neighbor, from its violent formation to the moment human hands first touched its surface. Perfect for collectors, educators, or anyone fascinated by space exploration, these lunar treasures bring the mystery and wonder of the Moon right to your fingertips."}/>
                </ContentSection>
                <Trademark/>
            </Page>
        }])}/>
    );
})();


function Page({ children }: { children?: React.ReactNode }): React.ReactNode {
    return <div
    style={{
        width: "100svw",
        height: "100svh",
        background: "#FBE9D0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center"
    }}>
        { children }
    </div>;
}

function Navbar({ children }: { children?: React.ReactNode }): React.ReactNode {
    return <div
    style={{
        width: "100%",
        height: "10%",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start"
    }}>
        { children }
    </div>
}

function AppName(): React.ReactNode {
    return <div
    style={{
        width: "auto",
        height: "auto",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#244855",
        fontSize: "2em",
        fontWeight: "bold",
        margin: "32px"
    }}>
        moon-rok
    </div>
}

function HeroSection({ children }: { children?: React.ReactNode }): React.ReactNode {
    return <div
    style={{
        width: "100%",
        height: "50%",
        background: "#90AEAD",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "50px"
    }}>
        { children }
    </div>
}

function Header(): React.ReactNode {
    return <div
    style={{
        width: "auto",
        height: "auto",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#FBE9D0",
        fontSize: "6em",
        fontWeight: "bold",
    }}>
        Freshly Sourced Moon Rocks.
    </div>
}

function BuyNowButton(): React.ReactNode {
    let [style, setStyle] = React.useState<React.CSSProperties>({
        width: "auto",
        height: "auto",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#FBE9D0",
        borderRadius: "8px",
        padding: "12px",
        color: "#FBE9D0",
        fontSize: "1em",
        cursor: "pointer"
    });
    return <ReactSpring.animated.div
    style={ReactSpring.useSpring(style)}
    onMouseEnter={async function(): Promise<void> {
        setStyle({
            ...style,
            background: "#FBE9D0",
            color: "#90AEAD"
        });
    }}
    onMouseLeave={async function(): Promise<void> {
        setStyle({
            ...style,
            background: "#90AEAD",
            color: "#FBE9D0"
        })
    }}>
        Buy Moon Rocks Now!
    </ReactSpring.animated.div>
}

function ContentSection({ children }: { children?: React.ReactNode }): React.ReactNode {
    return <div
    style={{
        width: "100%",
        height: "36%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "start",
        padding: "16px",
        gap: "16px"
    }}>
        { children }
    </div>
}

function Paragraph({ text }: { text: string }): React.ReactNode {
    return <div
    style={{
        width: "25%",
        height: "auto",
        color: "#244855",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "justify",
        fontSize: "0.95em",
        fontFamily: "serif",
        fontWeight: "normal"
    }}>
        { text }
    </div>
}

function Trademark(): React.ReactNode {
    return <div
    style={{
        width: "100%",
        height: "4%",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#90AEAD",
        fontSize: "0.8em",
        fontWeight: "bold"
    }}>
        moon-rock® 2024
    </div>
}