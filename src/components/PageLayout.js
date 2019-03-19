import React from "react"
import "../styles/global.css"
import GlobalPanel from "./GlobalPanel"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { PageContentContextProvider, PageContentOutlet } from "./PageContent"

// @todo #1 Implement responsive layout and navigation

// @todo #1 Add page title using Helmet
//  (see: https://www.gatsbyjs.org/docs/add-page-metadata)

export default function PageLayout({ children }) {
  return (
    <PageContentContextProvider>
      <div css={{ margin: "13px 16px" }}>
        <img
          src={require("../styles/images/site-logo.png")}
          alt="ELECT"
          css={{ maxWidth: 150, width: "100%", display: "block" }}
        />
        <p
          css={{
            margin: "10px 0",
            fontSize: "0.75rem",
            color: "#4a4a4a",
            lineHeight: "1.2",
          }}
        >
          In VOTE We TRUST
        </p>
      </div>
      <GlobalPanel />
      <div css={{ margin: "16px" }}>
        <NavBar />
      </div>
      <PageContentOutlet />
      {children}
      <Footer />
    </PageContentContextProvider>
  )
}
