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
        <>
            <div className='cont  bg-[#161b22]' >
            <div className='main-cont  bg-[#161b22]' >
                <div className='left-cont flex flex-col bg-[#161b22] gap-4' >

                    {/* THEME SWITCHER 
                    <div className='flex items-center p-3 w-full rounded-xl  mx-auto bg-[#292e36] justify-between' >
                        <h2 className='font-bold  text-[#9babbf]' >Theme Switcher</h2> 
                        {/* <select className='px-1 w-20 border-none text-[#697781] bg-[#161b22] py-1 rounded flex items-center ' onChange={onChangeBtn} >
                            <option value="light">Light</option>
                            <option className='p-4 border-none w-10' value="dark">Dark</option>
                        </select> */}

                        {/* <input type="checkbox" value=""  onChange={onChangeBtn} checked={theme === "dark"} />
                    </div> */} 

                {/* Profile container  */}
                   <div className='profile-cont rounded-2xl bg-[#292e36]  p-4 flex flex-col items-center gap-4' >
                        
                        <div className='bg-red-300 pro-img-cont h-[80px] w-[80px] rounded-full border-[2px] border-[#0860ca]' >
                        </div>
                        <h2 className='text-[#9babbf] text-xl' >Swapnil Nade</h2>
                        <p className=' text-[#6e7781] font-lato text-xs line-clamp-6 break-all' >⚡ Junior Software Engineer | Open Source Enthusiast | REACT | MONGO DB | Node.js</p>
                        <button to={"www.google.com"} className='border-[1.5px] border-[#6e7781] p-1 pt-[0px] mx-10 my-2 rounded-xl px-2 mb-[10px] text-[12px] text-[#0757ba] transition ease-in-out hover:bg-[#0757ba] hover:text-white  hover:border-[#0757ba]' >Download Resume</button>
                   </div>

                   {/* some about section  */}

                   <div className=' bg-[#292e36] px-2 pr-4 py-4 rounded-2xl flex flex-col gap-4' >

                        <div className='flex justify-between items-center' >
                            <span className='text-xs text-[#768995] ' >Based in:</span>
                            <span className='text-xs text-[#768995] ' >Maharashtra</span>
                        </div>

                        <div className='flex justify-between items-center' >
                            <span className='text-xs text-[#768995] ' >GitHub:</span>
                            <span className='text-xs text-[#768995] ' >swanax</span>
                        </div>

                        <div className='flex justify-between items-center' >
                            <span className='text-xs text-[#768995] ' >Twitter</span>
                            <span className='text-xs text-[#768995] ' >swa_nax</span>
                        </div>

                        <div className='flex justify-between items-center' >
                            <span className='text-xs text-[#768995] ' >buttonedin</span>
                            <span className='text-xs text-[#768995] ' >SWAPNIL NADE</span>
                        </div>

                        <div className='flex justify-between items-center' >
                            <span className='text-xs text-[#768995] ' >Email:</span>
                            <span className='text-xs text-[#768995] ' >swapnilnade07@gmail.com</span>
                        </div>
                   </div>

                   {/* Tech stack section */}

                   <div className=' bg-[#292e36] rounded-xl p-1 px-4' >

                       <h1 className='text-[#9babbf] text-md mb-2'>Tech Stack</h1>
                       <div className='p-auto tech-stack mx-4 mb-4 flex flex-col  items-center wrap-normal gap-2 overflow-hidden '>
                                    <div className='text-white flex items-center text-xs  px-1 pr-2 rounded-xl bg-[#0757ba] ' ><span className='inline-block' >Node.js   </span></div>
                                    <div className='text-white flex items-center text-xs  px-1 pr-2 rounded-xl bg-[#0757ba] ' ><span className='inline-block' >CSS3      </span></div>
                                    <div className='text-white flex items-center text-xs  px-1 pr-2 rounded-xl bg-[#0757ba] ' ><span className='inline-block' >Git       </span></div>
                                    <div className='text-white flex items-center text-xs  px-1 pr-2 rounded-xl bg-[#0757ba] ' ><span className='inline-block' >ReactJS   </span></div>
                                    <div className='text-white flex items-center text-xs  px-1 pr-2 rounded-xl bg-[#0757ba] ' ><span className='inline-block' >MYSql     </span></div>
                                    <div className='text-white flex items-center text-xs  px-1 pr-2 rounded-xl bg-[#0757ba] ' ><span className='inline-block' >Tailwind  </span></div> 
                                    <div className='text-white flex items-center text-xs  px-1 pr-2 rounded-xl bg-[#0757ba] ' ><span className='inline-block' >Java      </span></div>
                                    <div className='text-white flex items-center text-xs  px-1 pr-2 rounded-xl bg-[#0757ba] ' ><span className='inline-block' >JavaScript</span></div> 
                                    <div className='text-white flex items-center text-xs  px-1 pr-2 rounded-xl bg-[#0757ba] ' ><span className='inline-block' >PHP       </span></div>                         
                        </div>
                    
                   </div>

                   
                   {/* experience section text-[#9babbf] 
text-[#6e7781] */}

                   <div className=' bg-[#292e36] flex flex-col gap-2 rounded-xl p-2 px-4'  >

                        <h1 className='text-[#9babbf] ' >Experience</h1>
                        <div className='flex flex-col gap-4 pl-4' >
                               <div className='flex gap-4' >
                               <div className=' exp' >
                                    <p className='ml-[-2.8px]' >●</p>
                                    <p className='mt-[-12px]'>|</p>
                                    <p className='mt-[-10px]'>|</p>
                                    <p className='mt-[-10px]'>|</p>
                                </div>
                                <div className='flex flex-col mt-2 ' >
                                    <p className='text-[#6e7781] text-xs' >september 2024 - october 2024</p>
                                    <p className='text-[#9babbf] text-sm' >FrontEnd devloper</p>
                                    <p className='text-[#6e7781] text-sm' >CodSoft</p>
                                </div>
                               </div>

                               <div className='flex gap-4' >
                               <div className=' exp' >
                                    <p className='ml-[-2.8px]' >●</p>
                                    <p className='mt-[-12px]'>|</p>
                                    <p className='mt-[-10px]'>|</p>
                                    <p className='mt-[-10px]'>|</p>
                                </div>
                                <div className='flex flex-col mt-2 ' >
                                    <p className='text-[#6e7781] text-xs' >september 2024 - october 2024</p>
                                    <p className='text-[#9babbf] text-sm' >FrontEnd devloper</p>
                                    <p className='text-[#6e7781] text-sm' >CodSoft</p>
                                </div>
                               </div>
                        </div>
                        <div>
                        </div>
                   </div>

                    {/* CERTIFICATION SECTION  */}
                  
                     <div className=' bg-[#292e36] flex flex-col gap-2 rounded-xl p-2 px-4'  >

                        <h1 className='text-[#9babbf] ' >Certification</h1>
                        <div className='flex flex-col gap-4 pl-4' >
                               <div className='flex gap-4' >
                               <div className=' exp' >
                                    <p className='ml-[-2.8px]' >●</p>
                                    <p className='mt-[-12px]'>|</p>
                                    <p className='mt-[-10px]'>|</p>
                                    <p className='mt-[-10px]'>|</p>
                                </div>
                                <div className='flex flex-col mt-2 ' >
                                    <p className='text-[#6e7781] text-xs' >september 2024</p>
                                    <p className='text-[#9babbf] text-sm' >Front END DEV</p>
                                    <p className='text-[#6e7781] text-sm' >INFOSYS</p>
                                </div>
                               </div>
                        </div>
                        <div>
                        </div>
                   </div>


                   {/* EDUCATION SECTION */}
                    <div className=' bg-[#292e36] flex flex-col gap-2 rounded-xl p-2 px-4'  >

                        <h1 className='text-[#9babbf]' >Education</h1>
                        <div className='flex flex-col gap-4 pl-4' >
                               <div className='flex gap-4' >
                               <div className=' exp' >
                                    <p className='ml-[-2.8px]' >●</p>
                                    <p className='mt-[-12px]'>|</p>
                                    <p className='mt-[-10px]'>|</p>
                                    <p className='mt-[-10px]'>|</p>
                                </div>
                                <div className='flex flex-col mt-2 ' >
                                    <p className='text-[#6e7781] text-xs' >2022 - 2023</p>
                                    <p className='text-[#9babbf] text-sm' >HSC</p>
                                    <p className='text-[#6e7781] text-sm' >JVM COLLEGE OF MURUD.</p>
                                </div>
                               </div>

                               <div className='flex gap-4' >
                               <div className=' exp' >
                                    <p className='ml-[-2.8px]' >●</p>
                                    <p className='mt-[-12px]'>|</p>
                                    <p className='mt-[-10px]'>|</p>
                                    <p className='mt-[-10px]'>|</p>
                                </div>
                                <div className='flex flex-col mt-2 ' >
                                    <p className='text-[#6e7781] text-xs' >2025 -2026</p>
                                    <p className='text-[#9babbf] text-sm' >B.VOC PSSD</p>
                                    <p className='text-[#6e7781] text-sm' >COCSIT</p>
                                </div>
                               </div>
                        </div>
                        <div>
                        </div>
                   </div>
 



                {/* end of right cont  bg-[#292e36]*/}
                </div>


                {/* right container */}
                <div className='right-cont bg-[#161b22] flex flex-col gap-4' >

                    {/* GITHUB PROJECTS LIST CONT text-[#9babbf]
text-[#6e7781] */}

                    <div className='flex bg-[#24292f] flex-col gap-4 py-2 px-4 rounded-xl' >
                        <h1 className='text-[#9babbf] ' >Github Projects</h1>
                        <div className='lg:grid r-cont-pro gap-2' >
                               <a href="https://www.github.com">
                               <div className=' bg-[#30363d] p-2 px-4 rounded-xl ' >
                                    <div>
                                        <h1 className='text-sm text-[#9babbf]' href="">GitProfile</h1>
                                        <p className='text-xs text-[#6e7781] ' >Create your portfolio by just providing your github name</p>
                                    </div>
                                    <div className='flex items-center justify-between' >
                                        <div className='flex gap-4' >
                                            <p className='text-xs text-[#6e7781] '>128</p>
                                            <p className='text-xs text-[#6e7781] '>fork</p>
                                        </div>
                                        <div >
                                           
                                            <p className='text-xs text-[#6e7781] ' > <span className='text-sm text-blue-400' >●</span>typescript</p>
                                        </div>
                                    </div>
                                </div>
                               </a>

                                <div className=' bg-[#30363d] p-2 px-4 rounded-xl ' >
                                    <div>
                                        <a className='text-sm text-[#9babbf]' href="">GitProfile</a>
                                        <p className='text-xs text-[#6e7781] ' >Create your portfolio by just providing your github name</p>
                                    </div>
                                    <div className='flex items-center justify-between' >
                                        <div className='flex gap-4' >
                                            <p className='text-xs text-[#6e7781] '>128</p>
                                            <p className='text-xs text-[#6e7781] '>fork</p>
                                        </div>
                                        <div >
                                           
                                            <p className='text-xs text-[#6e7781] ' > <span className='text-sm text-blue-400' >●</span>typescript</p>
                                        </div>
                                    </div>
                                </div>

                                <div className=' bg-[#30363d] p-2 px-4 rounded-xl ' >
                                    <div>
                                        <a className='text-sm text-[#9babbf]' href="">GitProfile</a>
                                        <p className='text-xs text-[#6e7781] ' >Create your portfolio by just providing your github name</p>
                                    </div>
                                    <div className='flex items-center justify-between' >
                                        <div className='flex gap-4' >
                                            <p className='text-xs text-[#6e7781] '>128</p>
                                            <p className='text-xs text-[#6e7781] '>fork</p>
                                        </div>
                                        <div >
                                           
                                            <p className='text-xs text-[#6e7781] ' > <span className='text-sm text-blue-400' >●</span>typescript</p>
                                        </div>
                                    </div>
                                </div>

                                <div className=' bg-[#30363d] p-2 px-4 rounded-xl ' >
                                    <div>
                                        <a className='text-sm text-[#9babbf]' href="">GitProfile</a>
                                        <p className='text-xs text-[#6e7781] ' >Create your portfolio by just providing your github name</p>
                                    </div>
                                    <div className='flex items-center justify-between' >
                                        <div className='flex gap-4' >
                                            <p className='text-xs text-[#6e7781] '>128</p>
                                            <p className='text-xs text-[#6e7781] '>fork</p>
                                        </div>
                                        <div >
                                           
                                            <p className='text-xs text-[#6e7781] ' > <span className='text-sm text-blue-400' >●</span>typescript</p>
                                        </div>
                                    </div>
                                </div>

                                <div className=' bg-[#30363d] p-2 px-4 rounded-xl ' >
                                    <div>
                                        <a className='text-sm text-[#9babbf] ' href="">GitProfile</a>
                                        <p className='text-xs text-[#6e7781] ' >Create your portfolio by just providing your github name</p>
                                    </div>
                                    <div className='flex items-center justify-between' >
                                        <div className='flex gap-4' >
                                            <p className='text-xs text-[#6e7781] '>128</p>
                                            <p className='text-xs text-[#6e7781] '>fork</p>
                                        </div>
                                        <div >
                                           
                                            <p className='text-xs text-[#6e7781] ' > <span className='text-sm text-blue-400' >●</span>typescript</p>
                                        </div>
                                    </div>
                                </div>

                                <div className=' bg-[#30363d] p-2 px-4 rounded-xl ' >
                                    <div>
                                        <a className='text-sm text-[#9babbf]' href="">GitProfile</a>
                                        <p className='text-xs text-[#6e7781] ' >Create your portfolio by just providing your github name</p>
                                    </div>
                                    <div className='flex items-center justify-between' >
                                        <div className='flex gap-4' >
                                            <p className='text-xs text-[#6e7781] '>128</p>
                                            <p className='text-xs text-[#6e7781] '>fork</p>
                                        </div>
                                        <div >
                                           
                                            <p className='text-xs text-[#6e7781] ' > <span className='text-sm text-blue-400' >●</span>typescript</p>
                                        </div>
                                    </div>
                                </div>

                                <div className=' bg-[#30363d] p-2 px-4 rounded-xl ' >
                                    <div>
                                        <a className='text-sm text-[#9babbf]' href="">GitProfile</a>
                                        <p className='text-xs text-[#6e7781] ' >Create your portfolio by just providing your github name</p>
                                    </div>
                                    <div className='flex items-center justify-between' >
                                        <div className='flex gap-4' >
                                            <p className='text-xs text-[#6e7781] '>128</p>
                                            <p className='text-xs text-[#6e7781] '>fork</p>
                                        </div>
                                        <div >
                                           
                                            <p className='text-xs text-[#6e7781] ' > <span className='text-sm text-blue-400' >●</span>typescript</p>
                                        </div>
                                    </div>
                                </div>

                                <div className=' bg-[#30363d] p-2 px-4 rounded-xl ' >
                                    <div>
                                        <a className='text-sm text-[#9babbf]' href="">GitProfile</a>
                                        <p className='text-xs text-[#6e7781] ' >Create your portfolio by just providing your github name</p>
                                    </div>
                                    <div className='flex items-center justify-between' >
                                        <div className='flex gap-4' >
                                            <p className='text-xs text-[#6e7781] '>128</p>
                                            <p className='text-xs text-[#6e7781] '>fork</p>
                                        </div>
                                        <div >
                                           
                                            <p className='text-xs text-[#6e7781] ' > <span className='text-sm text-blue-400' >●</span>typescript</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    
                    {/* live projects  */}

                    <div className='px-2  bg-[#292e36] rounded-xl py-1' >
                        <h1 className='text-[#9babbf]' >My Projects</h1>
                            <div className='lg:grid gap-4 pro-cont-r px-3 py-4' >
                                <div className='flex gap-2 flex-col items-center bg-[#30363d] rounded-xl ' >
                                    <span className='text-xs text-[#9babbf]'>Project Name</span>
                                    <span className='bg-gray-300 w-10 h-10 inline-block' > </span>
                                    <p className='text-xs px-4 text-[#6e7781] py-2' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, obcaecati.</p>
                                </div>
                                <div className='flex gap-2 flex-col items-center bg-[#30363d] rounded-xl ' >
                                    <span className='text-xs text-[#9babbf]'>Project Name</span>
                                    <span className='bg-gray-300 w-10 h-10 inline-block' > </span>
                                    <p className='text-xs px-4 text-[#6e7781] py-2' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, obcaecati.</p>
                                </div>
                                <div className='flex gap-2 flex-col items-center bg-[#30363d] rounded-xl ' >
                                    <span className='text-xs text-[#9babbf]'>Project Name</span>
                                    <span className='bg-gray-300 w-10 h-10 inline-block' > </span>
                                    <p className='text-xs px-4 text-[#6e7781] py-2' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, obcaecati.</p>
                                </div>
                            </div>
                            
                    </div>





                </div>
            </div>
        </div>

        </>
    )
}

export default Port
