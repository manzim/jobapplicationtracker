import React, { useState } from 'react'

import { Button, Icon, InputGroup, Position, TextArea, Toaster } from '@blueprintjs/core';
import { useHistory } from 'react-router-dom';

export default function LandingPage() {

    function sendEmail(e) {
        localStorage.setItem('position', position)
        localStorage.setItem('company', company)
        localStorage.setItem('experience', experience)
        localStorage.setItem('deadline', deadline)
        localStorage.setItem('platform', platform)
        console.log('anything')
    }

    const applyPlatform = [ 'facebook group', 'e-mail', 'company website', 'for reference' ]
    const experienceDemand = [ 'freshers', '0-1', '1-2', '2-3', '3+' ]

    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [experience, setExperience] = useState('')
    const [deadline, setDeadline] = useState('')
    const [platform, setPlatform] = useState('')

    let history = useHistory();
    return (
        <div>
            <article className="vh-100 dt w-100 bg-near-white">
                <div className="dtc v-mid tc white ph3 ph4-l">
                    <div className="bp3-card mw7 center black">
                        Job Application Tracker
                        <div class="cf flex items-center">
                            <div class="fl w-100 w-30-l w-30-m tr pr2">
                                <div className="cf">
                                    <div className="fl w-100 pa3 b f5 tr">Position</div>
                                    <div className="fl w-100 pa3 b f5 tr">Company</div>
                                    <div className="fl w-100 pa3 b f5 tr">Experience</div>
                                    <div className="fl w-100 pa3 b f5 tr">Date of Apply</div>
                                    <div className="fl w-100 pa3 b f5 tr">Deadline</div>
                                    <div className="fl w-100 pa3 b f5 tr">Apply Platform</div>
                                </div>
                            </div>
                            <div class="fl w-100 w-70-l w-70-m tc">
                                <form className="cf" >
                                    <div className="fl w-100">
                                        <InputGroup
                                            fill={true}
                                            name="Position to apply"
                                            type="text"
                                            // intent="danger"
                                            required={true}
                                            large={true}
                                            placeholder="Position to apply"
                                            value={position}
                                            onChange={(e) => { setPosition(e.target.value) }}
                                            className="w-100 br4 tc mb1 pa2"
                                        />
                                    </div>
                                    <div className="fl w-100">
                                        <InputGroup
                                            fill={true}
                                            name="company"
                                            type="text"
                                            // intent="danger"
                                            required={true}
                                            large={true}
                                            placeholder="company to apply"
                                            value={company}
                                            onChange={(e) => { setCompany(e.target.value) }}
                                            className="w-100 br4 tc mb1 pa2"
                                        />
                                    </div>
                                    <div className="fl w-100 pa2">
                                        <select
                                            className="shadow-3 f6 f5-l f5-m input-reset black-80 bg-white w-80 w-60-m w-100-l bn pa2"
                                            placeholder="experience "
                                            // style={{ color: "#3b3b3b", fontFamily: "GothamMedium" }}
                                            value={experience}
                                            onChange={e => setExperience(e.target.value)}
                                        >
                                            <option value="" disabled selected hidden>
                                                Year of Experience
                                            </option>
                                            {experienceDemand.map(item => {
                                                return (
                                                    <option selected value={item}>
                                                        {item}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="fl w-100 tl pa2 b">
                                        {new Date().toLocaleDateString()}
                                    </div>
                                    <div className="fl w-100">
                                        <InputGroup
                                            fill={true}
                                            name="deadline"
                                            type="text"
                                            // intent="danger"
                                            required={true}
                                            large={true}
                                            placeholder="deadline (format MM/DD/YYYY)"
                                            value={deadline}
                                            onChange={(e) => { setDeadline(e.target.value) }}
                                            className="w-100 br4 tc mb1 pa2"
                                        />
                                    </div>
                                    <div className="fl w-100 pa2">
                                        <select
                                            className="shadow-3 f6 f5-l f5-m input-reset black-80 bg-white w-80 w-60-m w-100-l bn pa2"
                                            placeholder="Application Platform"
                                            // style={{ color: "#3b3b3b", fontFamily: "GothamMedium" }}
                                            value={platform}
                                            onChange={e => setPlatform(e.target.value)}
                                        >
                                            <option value="" disabled selected hidden>
                                                Application Media
                                            </option>
                                            {applyPlatform.map(item => {
                                                return (
                                                    <option selected value={item}>
                                                        {item}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="cf flex items-center pa2">
                            <Button
                                className="center tc pointer w-80 f4 no-underline black br3
                                bg-animate hover-white inline-flex items-center pa2 ba border-box b"
                                large={true}
                                text="save"
                                icon="saved"
                                intent="success"
                                // disabled={ (company) && (experience) && (position) && (deadline) && (applyPlatform) !== '' ? false : true}
                                onClick={() => { sendEmail(); history.push('./list') }}
                            />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

