import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader
        speed={2}
        width={260}
        height={378}
        viewBox="0 0 260 378"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="4" ry="4" width="240" height="240" />
        <rect x="9" y="250" rx="4" ry="4" width="220" height="20" />
        <rect x="9" y="280" rx="4" ry="4" width="90" height="20" />
        <circle cx="215" cy="290" r="10" />
        <rect x="10" y="310" rx="4" ry="4" width="220" height="55" />
    </ContentLoader>
)

export default Loader