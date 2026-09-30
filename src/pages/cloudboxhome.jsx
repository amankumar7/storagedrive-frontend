import React, { useState } from "react";
import "../css/home.css";
import {loginCheck} from "../service/auth.js";

function Cloudboxhome() {

    const [search, setSearch] = useState("");

    async function handleGet() {
        await loginCheck();
    }

    return (
        <div className="drive-page">

            {/* Header */}
            <header className="drive-header">

                <div className="drive-logo">
                    <img
                        src="/folder.png"
                        alt="CloudBox"
                    />

                    <span>CloudBox</span>
                </div>

                <div className="search-box">

                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Search files and folders"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    {search && (
                        <button
                            onClick={() => setSearch("")}
                        >
                            ×
                        </button>
                    )}

                </div>

                <div className="user-menu">

                    <div className="user-avatar">
                        A
                    </div>

                    <span>Aman</span>

                    <span>⌄</span>

                </div>

            </header>


            <div className="drive-body">

                {/* Sidebar */}
                <aside className="sidebar">

                    <button className="new-button">
                        <span>+</span>
                        New
                    </button>

                    <nav>

                        <button className="active"
                            onClick={() => handleGet()}>
                            <span>⌂</span>
                            My Drive
                        </button>

                        <button>
                            <span>☆</span>
                            Starred
                        </button>

                        <button>
                            <span>🗑</span>
                            Trash
                        </button>

                    </nav>

                    <div className="storage-section">

                        <div className="storage-title">
                            Storage
                        </div>

                        <div className="storage-bar">
                            <div></div>
                        </div>

                        <p>
                            0 GB of 1 TB used
                        </p>

                    </div>

                </aside>


                {/* Main content */}
                <main className="drive-content">

                    <div className="content-header">

                        <div>
                            <h1>My Drive</h1>

                            <div className="breadcrumb">
                                Home / Root
                            </div>
                        </div>

                        <button className="view-button">
                            ▦
                        </button>

                    </div>


                    {/* Root folder */}
                    <section className="files-section">

                        <h2>
                            Folders
                        </h2>

                        <div className="file-grid">

                            <div className="folder-card">

                                <div className="folder-icon">
                                    📁
                                </div>

                                <div className="folder-info">

                                    <h3>
                                        Root
                                    </h3>

                                    <p>
                                        Main folder
                                    </p>

                                </div>

                                <button className="more-button">
                                    ⋮
                                </button>

                            </div>

                        </div>

                    </section>

                </main>

            </div>

        </div>
    );
}

export default Cloudboxhome;