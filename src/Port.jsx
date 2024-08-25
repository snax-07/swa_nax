import React from 'react'
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
        <div className='bg-[#161b22] text-[#9babbf] min-h-screen'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {/* Left Container */}
                    <div className='md:col-span-1 bg-[#161b22]'>
                        {/* THEME SWITCHER */}
                        {/* Uncomment and customize if needed */}
                        {/* <div className='flex items-center p-3 rounded-xl bg-[#292e36]'>
                            <h2 className='font-bold text-[#9babbf]'>Theme Switcher</h2>
                            <select className='px-1 border-none bg-[#161b22] text-[#697781] rounded' onChange={onChangeBtn}>
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        </div> */}

                        {/* Profile Container */}
                        <div className='bg-[#292e36] rounded-2xl p-4 flex flex-col items-center gap-4'>
                            <div className='bg-red-300 h-20 w-20 rounded-full border-2 border-[#0860ca]'></div>
                            <h2 className='text-xl'>Swapnil Nade</h2>
                            <p className='text-xs text-[#6e7781] text-center'>
                                ⚡ Junior Software Engineer | Open Source Enthusiast | REACT | MONGO DB | Node.js
                            </p>
                            <a href="www.google.com" className='border border-[#6e7781] p-1 px-2 rounded-xl text-xs text-[#0757ba] hover:bg-[#0757ba] hover:text-white transition'>
                                Download Resume
                            </a>
                        </div>

                        {/* About Section */}
                        <div className='bg-[#292e36] rounded-2xl p-4'>
                            {['Based in:', 'GitHub:', 'Twitter:', 'buttonedin', 'Email:'].map((label, idx) => (
                                <div key={idx} className='flex justify-between text-xs text-[#768995] mb-2'>
                                    <span>{label}</span>
                                    <span className='text-[#6e7781]'>
                                        {label === 'Based in:' ? 'Maharashtra' :
                                         label === 'GitHub:' ? 'swanax' :
                                         label === 'Twitter:' ? 'swa_nax' :
                                         label === 'buttonedin' ? 'SWAPNIL NADE' :
                                         'swapnilnade07@gmail.com'}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Tech Stack Section */}
                        <div className='bg-[#292e36] rounded-xl p-4'>
                            <h1 className='text-md mb-2'>Tech Stack</h1>
                            <div className='flex flex-wrap gap-2'>
                                {['Node.js', 'CSS3', 'Git', 'ReactJS', 'MySQL', 'Tailwind', 'Java', 'JavaScript', 'PHP'].map((tech, idx) => (
                                    <div key={idx} className='bg-[#0757ba] text-white text-xs px-2 py-1 rounded-xl'>
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className='bg-[#292e36] rounded-xl p-4'>
                            <h1>Experience</h1>
                            {[{ date: 'September 2024 - October 2024', position: 'FrontEnd Developer', company: 'CodSoft' }].map((exp, idx) => (
                                <div key={idx} className='flex gap-4 mb-4'>
                                    <div className='flex flex-col items-center'>
                                        <p className='text-xs text-[#6e7781]'>{exp.date}</p>
                                        <p className='text-sm text-[#9babbf]'>{exp.position}</p>
                                        <p className='text-sm text-[#6e7781]'>{exp.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Certification Section */}
                        <div className='bg-[#292e36] rounded-xl p-4'>
                            <h1>Certification</h1>
                            {[{ date: 'September 2024', title: 'Front END DEV', issuer: 'INFOSYS' }].map((cert, idx) => (
                                <div key={idx} className='flex gap-4 mb-4'>
                                    <div className='flex flex-col items-center'>
                                        <p className='text-xs text-[#6e7781]'>{cert.date}</p>
                                        <p className='text-sm text-[#9babbf]'>{cert.title}</p>
                                        <p className='text-sm text-[#6e7781]'>{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Education Section */}
                        <div className='bg-[#292e36] rounded-xl p-4'>
                            <h1>Education</h1>
                            {[{ date: '2022 - 2023', degree: 'HSC', institution: 'JVM COLLEGE OF MURUD' },
                              { date: '2025 - 2026', degree: 'B.VOC PSSD', institution: 'COCSIT' }].map((edu, idx) => (
                                <div key={idx} className='flex gap-4 mb-4'>
                                    <div className='flex flex-col items-center'>
                                        <p className='text-xs text-[#6e7781]'>{edu.date}</p>
                                        <p className='text-sm text-[#9babbf]'>{edu.degree}</p>
                                        <p className='text-sm text-[#6e7781]'>{edu.institution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className='md:col-span-2 bg-[#161b22]'>
                        {/* GitHub Projects */}
                        <div className='bg-[#24292f] rounded-xl p-4'>
                            <h1>GitHub Projects</h1>
                            <div className='grid gap-4 lg:grid-cols-2'>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((project, idx) => (
                                    <a key={idx} href="https://www.github.com" className='bg-[#30363d] rounded-xl p-4'>
                                        <div>
                                            <h1 className='text-sm text-[#9babbf]'>GitProfile</h1>
                                            <p className='text-xs text-[#6e7781]'>Create your portfolio by just providing your GitHub name</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-2'>
                                            <div className='flex gap-4'>
                                                <p className='text-xs text-[#6e7781]'>128</p>
                                                <p className='text-xs text-[#6e7781]'>fork</p>
                                            </div>
                                            <p className='text-xs text-[#6e7781]'>
                                                <span className='text-sm text-blue-400'>●</span>typescript
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Live Projects */}
                        <div className='bg-[#292e36] rounded-xl p-4 mt-4'>
                            <h1>My Projects</h1>
                            <div className='grid gap-4 lg:grid-cols-3'>
                                {[1, 2, 3].map((project, idx) => (
                                    <div key={idx} className='bg-[#30363d] rounded-xl p-4 flex flex-col items-center'>
                                        <span className='text-xs text-[#9babbf]'>Project Name</span>
                                        <span className='bg-gray-300 w-20 h-20'></span>
                                        <p className='text-xs text-[#6e7781] mt-2 text-center'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, obcaecati.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Port
            
