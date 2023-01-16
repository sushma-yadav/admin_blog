import { useNavigate } from "react-router-dom"
import './dashboard.css'

function Dashboard() {
    const navigate = useNavigate()
    return (
        <div className='dashboard p-1 bg-dark'>
            <p className="heading">Average active users /Clients</p>
            <div className='dashbaord_heading'>
                <div className="dashbord_client">
                    <div className="card">

                    </div>
                </div>
                <div className="dashboard_button">
                    <button onClick={() => navigate('/client-list')}>View all</button>
                    <button onClick={() => navigate('/add-client')}>Add Client</button>
                </div>

            </div>
            <div className="dashbord-count">
                <div className="total_records">
                    <div className="card total_client">
                        <h2>Total Clients</h2>
                        <h2>100.00</h2>
                        <p>+18 clients</p>
                    </div>
                    <div className="card total_client">
                        <h2>Total Active Clients</h2>
                        <h2>100.00</h2>
                        <p>+08.00</p>
                    </div>
                    <div className="card total_client">
                        <h2>Overall Users</h2>
                        <h2>100.00</h2>
                        <p>+40,000</p>
                    </div>
                </div>
                <div className="search card">
                    <div className="input-search">
                        <input type="text" name="" id="" placeholder="Search" />
                    </div>
                    <div className="card-1 bg-dark content">
                        <p>info@aaraclouds.com</p>
                    </div>
                    <div className="card-1 bg-dark content">
                        <p>info@aaraclouds.com</p>
                    </div>
                    <div className="card-1 bg-dark content">
                        <p>info@aaraclouds.com</p>
                    </div>
                    <div className="card-1 bg-dark content">
                        <p>info@aaraclouds.com</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard