export const metadata = {
    title: 'Travel Destinations',
    description: 'Website du lịch xây dựng bằng Next.js và W3.CSS',
}

export default function RootLayout({ children }) {
    return (
        <html lang="vi">
            <head>

                <link
                    rel="stylesheet"
                    href="https://www.w3schools.com/w3css/4/w3.css"
                    precedence="default"
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}