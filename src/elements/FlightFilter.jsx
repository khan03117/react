import React from 'react'

import { Checkbox, CheckboxGroup } from 'rsuite';
import { RangeSlider, Slider } from 'rsuite'
const airlines = [
    {
        name: "Air India",
        from: "from ₹ 4,754"
    },
    {
        name: "Akasha Air",
        from: "from ₹ 6,754"
    },
    {
        name: "Egypt Air",
        from: "from ₹ 8,754"
    },
    {
        name: "Emirats",
        from: "from ₹ 4,754"
    },
    {
        name: "Indigo",
        from: "from ₹ 4,754"
    },
    {
        name: "Ethihad",
        from: "from ₹ 4,754"
    },
    {
        name: "Oman",
        from: "from ₹ 4,754"
    },
    {
        name: "Spice Jet",
        from: "from ₹ 4,754"
    }
];
function FlightFilter() {
    const [value, setValue] = React.useState(['A', 'C']);

    const handleCheckAll = (value, checked) => setValue(checked ? airlines : []);
    const handleChange = value => setValue(value);

    return (
        <>
            <div className="w-100 filterGroup">

                <div class="accordion-item border-0 border-bottom pb-3 mb-3">
                    <div class="accordion-header border-0">
                        <button class="accordion-button  border-0  p-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Stops
                        </button>
                    </div>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body ps-0">
                            <ul className="list-unstyled p-0 m-0">
                                {
                                    ['Direct', 'One Stop', 'Two Stop'].map((item, index) => (
                                        <li key={index}>
                                            <div className="w-100">
                                                <div className="input-group">

                                                    <Checkbox>
                                                        {item}
                                                        <small className="d-block">
                                                            from ₹ 12,930
                                                        </small>
                                                    </Checkbox>


                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }


                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item border-0">
                    <div class="accordion-header border-0">
                        <button class="accordion-button  border-0  p-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Departure times
                        </button>
                    </div>
                    <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body ps-0">
                            <label htmlFor="">
                                Outbound
                                00:00 - 23:59
                            </label>
                            <div className="w-100 mt-3">
                                <RangeSlider min={0} max={24} step={0.1} tooltip={false} defaultValue={[0, 24]} />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="accordion-item border-0">
                    <div class="accordion-header border-0">
                        <button class="accordion-button  border-0  p-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseJourneyDuration" aria-expanded="true" aria-controls="collapseJourneyDuration">
                            Journey Duration
                        </button>
                    </div>
                    <div id="collapseJourneyDuration" class="accordion-collapse collapse show" data-bs-parent="#accordionExample9879">
                        <div class="accordion-body ps-0">
                            <label htmlFor="">
                                2:00 to 29.0 Hours
                            </label>
                            <div className="w-100 mt-3">
                                <Slider progress min={2} max={29} step={0.1} defaultValue={4} />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="accordion-item border-0">
                    <div class="accordion-header border-0">
                        <button class="accordion-button  border-0  p-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourview" aria-expanded="true" aria-controls="collapseFourview">
                            Airlines
                        </button>
                    </div>
                    <div id="collapseFourview" class="accordion-collapse collapse show" data-bs-parent="#accordionExample12312">
                        <div class="accordion-body ps-0">
                            <Checkbox
                                indeterminate={value.length > 0 && value.length < airlines.length}
                                checked={value.length === airlines.length}
                                onChange={handleCheckAll}
                            >
                                Check all
                            </Checkbox>

                            <CheckboxGroup className='d-flex' name="checkboxList" value={value} onChange={handleChange}>
                                {airlines.map((item, index) => (
                                    <Checkbox key={index} value={item.name}>
                                        {item.name}
                                        <small className="d-block">
                                            {item.from}
                                        </small>
                                    </Checkbox>
                                ))}
                            </CheckboxGroup>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FlightFilter