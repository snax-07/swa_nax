import React from 'react';
// import useTheme from './Context/ThemeContext'

function Port() {
    // const {theme,  lightTheme , darkTheme} = useTheme()
    // const onChangeBtn = (e) => {
    //     const darkStatus = e.currentTarget.checked
    //     if(darkStatus) {
    //       darkTheme()

    //     }else{
    //         lightTheme()
    //     }
    // }
    return (
        <>
            <div className='cont bg-[#161b22] min-h-screen px-4 md:px-8 lg:px-16'>
                <div className='main-cont bg-[#161b22] flex flex-col lg:flex-col'>
                    <div className='left-cont flex flex-col bg-[#161b22] gap-4 lg:w-full'>
                        {/* THEME SWITCHER 
                        <div className='flex items-center p-3 w-full rounded-xl mx-auto bg-[#292e36] justify-between'>
                            <h2 className='font-bold text-[#9babbf]'>Theme Switcher</h2>
                            {/* <select className='px-1 w-20 border-none text-[#697781] bg-[#161b22] py-1 rounded flex items-center' onChange={onChangeBtn}>
                                <option value="light">Light</option>
                                <option className='p-4 border-none w-10' value="dark">Dark</option>
                            </select> */}
                            {/* <input type="checkbox" value="" onChange={onChangeBtn} checked={theme === "dark"} />
                        </div> */}

                        {/* Profile container */}
                        <div className='profile-cont rounded-2xl bg-[#292e36] p-4 flex flex-col items-center gap-4'>
                            <div className='bg-red-300 pro-img-cont h-[80px] w-[80px] rounded-full border-[2px] border-[#0860ca]'>
                            </div>
                            <h2 className='text-[#9babbf] text-xl'>Swapnil Nade</h2>
                            <p className='text-[#6e7781] font-lato text-xs text-center break-all'>
                                ⚡ Junior Software Engineer | Open Source Enthusiast | REACT | MONGO DB | Node.js
                            </p>
                            <a href={"https://www.google.com"} className='border-[1.5px] border-[#6e7781] p-1 pt-[0px] mx-10 my-2 rounded-xl px-2 mb-[10px] text-[12px] text-[#0757ba] transition ease-in-out hover:bg-[#0757ba] hover:text-white hover:border-[#0757ba]'>
                                Download Resume
                            </a>
                        </div>

                        {/* About section */}
                        <div className='bg-[#292e36] px-2 pr-4 py-4 rounded-2xl flex flex-col gap-4'>
                            <div className='flex justify-between items-center text-xs text-[#768995]'>
                                <span>Based in:</span>
                                <span>Maharashtra</span>
                            </div>
                            <div className='flex justify-between items-center text-xs text-[#768995]'>
                                <span>GitHub:</span>
                                <span>swanax</span>
                            </div>
                            <div className='flex justify-between items-center text-xs text-[#768995]'>
                                <span>Twitter:</span>
                                <span>swa_nax</span>
                            </div>
                            <div className='flex justify-between items-center text-xs text-[#768995]'>
                                <span>buttonedin:</span>
                                <span>SWAPNIL NADE</span>
                            </div>
                            <div className='flex justify-between items-center text-xs text-[#768995]'>
                                <span>Email:</span>
                                <span>swapnilnade07@gmail.com</span>
                            </div>
                        </div>

                        {/* Tech stack section */}
                        <div className='bg-[#292e36] rounded-xl p-4'>
                            <h1 className='text-[#9babbf] text-md mb-2'>Tech Stack</h1>
                            <div className='flex flex-wrap gap-2'>
                                <div className='text-white flex items-center text-xs px-2 py-1 rounded-xl bg-[#0757ba]'>
                                    <span>Node.js</span>
                                </div>
                                <div className='text-white flex items-center text-xs px-2 py-1 rounded-xl bg-[#0757ba]'>
                                    <span>CSS3</span>
                                </div>
                                <div className='text-white flex items-center text-xs px-2 py-1 rounded-xl bg-[#0757ba]'>
                                    <span>Git</span>
                                </div>
                                <div className='text-white flex items-center text-xs px-2 py-1 rounded-xl bg-[#0757ba]'>
                                    <span>ReactJS</span>
                                </div>
                                <div className='text-white flex items-center text-xs px-2 py-1 rounded-xl bg-[#0757ba]'>
                                    <span>MySQL</span>
                                </div>
                                <div className='text-white flex items-center text-xs px-2 py-1 rounded-xl bg-[#0757ba]'>
                                    <span>Tailwind</span>
                                </div>
                                <div className='text-white flex items-center text-xs px-2 py-1 rounded-xl bg-[#0757ba]'>
                                    <span>Java</span>
                                </div>
                                <div className='text-white flex items-center text-xs px-2 py-1 rounded-xl bg-[#0757ba]'>
                                    <span>JavaScript</span>
                                </div>
                                <div className='text-white flex items-center text-xs px-2 py-1 rounded-xl bg-[#0757ba]'>
                                    <span>PHP</span>
                                </div>
                            </div>
                        </div>

                        {/* Experience section */}
                        <div className='bg-[#292e36] flex flex-col gap-2 rounded-xl p-4'>
                            <h1 className='text-[#9babbf]'>Experience</h1>
                            <div className='flex flex-col gap-4'>
                                <div className='flex gap-4 items-start'>
                                    <div className='exp text-[#6e7781] text-xs'>
                                        <p>●</p>
                                        <p>|</p>
                                        <p>|</p>
                                        <p>|</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[#6e7781] text-xs'>September 2024 - October 2024</p>
                                        <p className='text-[#9babbf] text-sm'>FrontEnd Developer</p>
                                        <p className='text-[#6e7781] text-sm'>CodSoft</p>
                                    </div>
                                </div>

                                <div className='flex gap-4 items-start'>
                                    <div className='exp text-[#6e7781] text-xs'>
                                        <p>●</p>
                                        <p>|</p>
                                        <p>|</p>
                                        <p>|</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[#6e7781] text-xs'>September 2024 - October 2024</p>
                                        <p className='text-[#9babbf] text-sm'>FrontEnd Developer</p>
                                        <p className='text-[#6e7781] text-sm'>CodSoft</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certification section */}
                        <div className='bg-[#292e36] flex flex-col gap-2 rounded-xl p-4'>
                            <h1 className='text-[#9babbf]'>Certification</h1>
                            <div className='flex flex-col gap-4'>
                                <div className='flex gap-4 items-start'>
                                    <div className='exp text-[#6e7781] text-xs'>
                                        <p>●</p>
                                        <p>|</p>
                                        <p>|</p>
                                        <p>|</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[#6e7781] text-xs'>September 2024</p>
                                        <p className='text-[#9babbf] text-sm'>Front END DEV</p>
                                        <p className='text-[#6e7781] text-sm'>INFOSYS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Education section */}
                        <div className='bg-[#292e36] flex flex-col gap-2 rounded-xl p-4'>
                            <h1 className='text-[#9babbf]'>Education</h1>
                            <div className='flex flex-col gap-4'>
                                <div className='flex gap-4 items-start'>
                                    <div className='exp text-[#6e7781] text-xs'>
                                        <p>●</p>
                                        <p>|</p>
                                        <p>|</p>
                                        <p>|</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[#6e7781] text-xs'>2022 - 2023</p>
                                        <p className='text-[#9babbf] text-sm'>HSC</p>
                                        <p className='text-[#6e7781] text-sm'>JVM COLLEGE OF MURUD</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-start'>
                                    <div className='exp text-[#6e7781] text-xs'>
                                        <p>●</p>
                                        <p>|</p>
                                        <p>|</p>
                                        <p>|</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[#6e7781] text-xs'>2025 - 2026</p>
                                        <p className='text-[#9babbf] text-sm'>B.VOC PSSD</p>
                                        <p className='text-[#6e7781] text-sm'>COCSIT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='right-cont lg:w-full'>
                        {/* GitHub Projects */}
                        <div className='bg-[#24292f] rounded-xl p-4'>
                            <h1 className='text-[#9babbf]'>GitHub Projects</h1>
                            <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2'>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((project, idx) => (
                                    <a key={idx} href={"https://www.github.com"} className='bg-[#30363d] rounded-xl p-4 flex flex-col'>
                                        <div className='flex flex-col gap-2'>
                                            <h1 className='text-[#9babbf] text-sm'>GitProfile</h1>
                                            <p className='text-[#6e7781] text-xs'>
                                                Create your portfolio by just providing your GitHub name
                                            </p>
                                        </div>
                                        <div className='flex items-center justify-between mt-2'>
                                            <div className='flex gap-4'>
                                                <p className='text-[#6e7781] text-xs'>128</p>
                                                <p className='text-[#6e7781] text-xs'>fork</p>
                                            </div>
                                            <p className='text-[#6e7781] text-xs'>
                                                <span className='text-[#0757ba] text-sm'>●</span>typescript
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Live Projects */}
                        <div className='bg-[#292e36] rounded-xl p-4 mt-4'>
                            <h1 className='text-[#9babbf]'>My Projects</h1>
                            <div className='flex flex-col gap-4 lg:grid lg:grid-cols-3'>
                                {[1, 2, 3].map((project, idx) => (
                                    <div key={idx} className='bg-[#30363d] rounded-xl p-4 flex flex-col items-center'>
                                        <span className='text-[#9babbf] text-xs'>Project Name</span>
                                        <div className='bg-gray-300 w-20 h-20 rounded-lg mt-2'></div>
                                        <p className='text-[#6e7781] text-xs mt-2 text-center'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, obcaecati.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Port;
