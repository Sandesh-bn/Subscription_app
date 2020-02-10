import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from 'components/Button'
import { Axios } from 'utils/Axios'
import './style.css'

function DonePage(props) {

    // const history = useHistory();
    const { history } = props;

    const [current, setCurrent] = useState({
        plan: "",
        name: "",
        seats: 0,
        cost: 0
    })

    const [newSubscription, setNewSubscription] = useState({
        plan: "",
        name: "",
        seats: 0,
        cost: 0
    })

    useEffect(() => {
        Axios.get('/current')
            .then((response) => {
                if (response.status === 200) {
                    console.log('current', response.data);
                    setNewSubscription(response.data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        setCurrent(props.location.state.data)
    }, [])


    const goBack = () => {
        history.goBack();
    }

    return (
        <div id="done-page">
            <div className="old column">
                <h4>Previous Subscription</h4>
                <div className="row">
                    <span className="label">Plan</span>
                    <span className="value" id="old-plan">{current.name}</span>
                </div>
                <div className="row">
                    <span className="label">Seats</span>
                    <span className="value" id="old-seats">{current.seats}</span>
                </div>
                <div className="row">
                    <span className="label">Price</span>
                    $<span className="value" id="old-cost">{current.cost}</span>
                </div>
            </div>

            <div className="new column">
                <h4>Updated Subscription</h4>
                <div className="row">
                    <span className="label">Plan</span>
                    <span className="value" id="new-plan">{newSubscription.name}</span>
                </div>
                <div className="row">
                    <span className="label">Seats</span>
                    <span className="value" id="new-seats">{newSubscription.seats}</span>
                </div>
                <div className="row">
                    <span className="label">Price</span>
                    $<span className="value" id="new-cost">{newSubscription.cost}</span>
                </div>
            </div>
            <Button onClick={goBack} label="Back" />
        </div>
    )
}

export default DonePage