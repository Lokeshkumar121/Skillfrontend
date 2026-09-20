import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogType = "website",
}) => {
    return (
        <Helmet>
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            {canonical && (
                <link
                    rel="canonical"
                    href={canonical}
                />
            )}

            <meta
                property="og:title"
                content={ogTitle || title}
            />

            <meta
                property="og:description"
                content={ogDescription || description}
            />

            <meta
                property="og:type"
                content={ogType}
            />

            {canonical && (
                <meta
                    property="og:url"
                    content={canonical}
                />
            )}
        </Helmet>
    );
};

export default SEO;