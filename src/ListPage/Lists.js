import React from 'react'

function Lists() {
    const appliedPosition = localStorage.getItem('position')
    const companyName = localStorage.getItem('company')
    const experienceWanted = localStorage.getItem('experience')
    const platformName = localStorage.getItem('platform')
    const deadlineDay = localStorage.getItem('deadline')
    return (
        <div>
            <div className="bp3-card  ">
                <h1 className="fw5 b mb3 tc" > My applications all around</h1>
                <ul className="list pl0 ">
                    <li className="b--black-10 ba br1 custom-patient-item hover-bg-lightest-blue ph0-l pointer shadow-4 pa3">
                        <div className="cf b flex justify-between">
                            <div className=" w-20">
                                Position: {appliedPosition}
                            </div>
                            <div className=" w-20">
                                Company Name: {companyName}
                            </div>
                            <div className=" w-20">
                                Experience: {experienceWanted}
                            </div>
                            <div className=" w-20">
                                Deadline: {deadlineDay}
                            </div>
                            <div className=" w-20">
                                Platform: {platformName}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Lists
