import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Button from 'components/Button'
import { Axios } from 'utils/Axios'
import './style.css'


function ConfigPage(props) {

    // const history = useHistory();
    const { history } = props;

    // updated subscription object
    const [newSubscription, setNewSubscription] = useState({
        plan: "",
        name: "",
        seats: 0,
        cost: 0
    });
    // current subscription object
    const [current, setCurrent] = useState({
        plan: "",
        name: "",
        seats: 0,
        cost: 0
    });
    const [plans, setPlans] = useState([])// keys - list of plan keys
    const [names, setNames] = useState([]) // names - list of plan names
    const [costs, setCosts] = useState([]) // coses - list of plan costs

    // loads current subscription object
    useEffect(() => {
        Axios.get('/current')
        .then((response) => {
            if (response.status === 200) {
                setCurrent(response.data)
                setNewSubscription(response.data)
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    // loads plans from server
    useEffect(() => {
        Axios.get('/plans')
        .then((response) => {
            if (response.status === 200) {
                setPlans(response.data)
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    // loads plan names
    useEffect(() => {
        Axios.get('/names')
        .then((response) => {
            if (response.status === 200) {
                setNames(response.data)
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    // loads plan costs
    useEffect(() => {
        Axios.get('/costs')
        .then((response) => {
            if (response.status === 200) {
                setCosts(response.data)
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    // seat input changed
    const seatChange = async (value) => {
        updateNewSubscription(newSubscription.plan, value);
    }

    // plan select box changd
    const planChanged = (value) => {
        updateNewSubscription(value, newSubscription.seats);
    }

    // validates the difference of new and updated values
    const checkUpdated = () => {
        for (let key in current) {
            if (current[key] !== undefined) {
                if (current[key] !== newSubscription[key]) {
                    return true;
                }
            }
        }
        return false;
    }

    // updates states when inputs change
    const updateNewSubscription = (plan, seats) => {
        setNewSubscription({
            plan: plan,
            seats: Number(seats),
            name: names[plan],
            cost: seats * costs[plan]
        });
    }

    // updates the status using '[PUT]/current'
    const updateSubscription = () => {
        console.log('[updateSubscription]');
        Axios.put('/current', newSubscription)
        .then((response) => {
            if (response.status === 200) {
                history.push('done', {
                    data: current
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="config-page">
            <h2>Subscription</h2>
            <div className="product">
                <div className="edit-plan">
                    <div>
                        <select className="plan-input" value={newSubscription.plan} onChange={e => planChanged(e.target.value)}>
                            {
                                plans.map((plan, i) => {
                                    return <option key={i} value={plan}>{names[plan]}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="label">
                        <label htmlFor="plan-input">Plan</label>
                    </div>
                </div>

                <div className="edit-seats">
                    <div>
                        <input id="seats-input" type="number" value={newSubscription.seats} onChange={e => seatChange(e.target.value)} placeholder="Seats" />
                    </div>
                    <div className="label">
                        <label htmlFor="seats-input">Seats</label>
                    </div>
                </div>

                <div className="price">
                    <div id="cost-value">{newSubscription.cost}</div>
                    <div className="label">Price</div>
                </div>
            </div>
            <Button label="Update Subscription" disabled={!checkUpdated()} onClick={updateSubscription} />
        </div>
    )
}

export default ConfigPage