import React from 'react'

const Sidebar = () => {
  return (
    <aside className="joirnal__sidebar">
      <div className="joirnal__sidebar-navbar">
        <h3 className="mt-5">
        <i  className="far fa-moon"></i>
          <span> Angel santillan</span>
        </h3>
        <button className="btn">
          logout
        </button>
      </div>
      <div className="journal__new-entry">
        <i className="fa fa-calendar-plus fa-5x"></i>
        <p className="mt-5">
          New entry
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
