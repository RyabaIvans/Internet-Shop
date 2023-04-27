import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props:any) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={470}
        viewBox="0 0 280 470"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="100" cy="100" r="100" />
        <rect x="3" y="265" rx="16" ry="16" width="237" height="27" />
        <rect x="3" y="308" rx="16" ry="16" width="237" height="65" />
        <rect x="8" y="393" rx="16" ry="16" width="88" height="32" />
        <rect x="144" y="394" rx="16" ry="16" width="88" height="32" />
    </ContentLoader>
)

export default Sceleton