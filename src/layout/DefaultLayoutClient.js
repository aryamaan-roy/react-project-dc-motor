import React from 'react'
import { AppContentClient, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = (props) => {
  return (
    <div>
      <AppSidebar type="client" />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader {...props} />
        <div className="body flex-grow-1 px-3">
          <AppContentClient {...props} />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
