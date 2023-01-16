import './add.css'
import { BiPencil } from 'react-icons/bi'
import adminLogo from '../../assets/Images/admin-logo.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


function AddClient() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        client_name: '',
        client_image: '',
        admin_name: '',
        admin_email: '',
        password: '',
        employee_count: '',
        country_id: '',
        industry: '',
        client_mobile_number: '',
    })
    const [error, setError] = useState(false)
    const [validEmail, setValidEmail] = useState(true)

    const validateEmail = (email) => {
        if (
            String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        ) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    };


    const addClient = (e) => {
        e.preventDefault()
        if (formData.client_name.length === 0 || formData.client_image.length === 0 || formData.admin_email.length === 0 || formData.admin_name.length === 0 || formData.country_id.length === 0 || formData.industry.length === 0 || formData.employee_count.length === 0 || formData.password.length === 0 || formData.client_mobile_number.length === 0) {
            setError(true)
        }
        else {
            if (validEmail) {
                let form = new FormData()
                form.append('client_image', formData.client_image)
                form.append('client_name', formData.client_name)
                form.append('admin_name', formData.admin_name)
                form.append('admin_email', formData.admin_email)
                form.append('password', formData.password)
                form.append('employee_count', formData.employee_count)
                form.append('country_id', formData.country_id)
                form.append('industry', formData.industry)
                form.append('client_mobile_number', formData.client_mobile_number)

                axios.post('http://api.reward-dragon.com:8001/rewardadmin/add-client/', form, {
                    headers: {
                        Authorization: 'cbad5672e4e94dee855dd1a8beae9894'
                    }
                }).then((res) => {

                }).catch((err) => {

                })
            }

        }
    }


    return (
        <div className="add_client bg-dark p-1">
            <div className='col-left'>
                <div className='card profile-card'>
                    <h2 style={{ fontWeight: "400" }}>Add New Client</h2>
                    <img src={formData.client_image ? URL.createObjectURL(formData.client_image) : adminLogo} alt="" />
                    {error && formData.client_image.length === 0 ? <span style={{ color: "red", fontSize: '12px' }}> This Field is Required</span> : ''}
                    <label htmlFor="profile-pidcture1">
                        <BiPencil
                            id="img1"
                            cursor={'pointer'}
                            size={12}
                            className='edit-icon'
                        />
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        id="profile-pidcture1"
                        name="choose-file"
                        hidden
                        onChange={(e) => setFormData({ ...formData, client_image: e.target.files[0] })}
                    />
                    <p>Only <span style={{ color: "orange" }}>png, jgp, jpeg</span> allowed</p>
                    <p>Please upload your organization logo here</p>
                </div>
                <button onClick={() => navigate('/client-list')}>View all</button>
            </div>
            <div className='col-right'>
                <div className='card'>
                    <form action="" className='form-field'>
                        <h2 style={{ fontWeight: "400", marginBottom: "10px" }}>New Client Information</h2>
                        <div className='client-info'>
                            <div className='form-input-field'>
                                <label htmlFor="">Company Name</label>
                                <input
                                    value={formData.client_name}
                                    type="text"
                                    placeholder='Company Name'
                                    onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                                />
                                {error && formData.client_name.length === 0 ? <span style={{ color: "red", fontSize: '12px' }}> This Field is Required</span> : ''}
                            </div>
                            <div className='form-input-field'>
                                <label htmlFor="">Administrator Name</label>
                                <input
                                    value={formData.admin_name}
                                    type="text"
                                    placeholder='Administrator Name'
                                    onChange={(e) => setFormData({ ...formData, admin_name: e.target.value })}
                                />
                                {error && formData.admin_name.length === 0 ? <span style={{ color: "red", fontSize: '12px' }}> This Field is Required</span> : ''}
                            </div>
                            <div className='form-input-field'>
                                <label htmlFor="">Administrator Email</label>
                                <input
                                    value={formData.admin_email}
                                    type="email"
                                    placeholder='Administrator Email'
                                    onChange={(e) => {
                                        validateEmail(e.target.value)
                                        setFormData({ ...formData, admin_email: e.target.value })
                                    }
                                    }
                                />
                                {error && formData.admin_email.length === 0 ? <span style={{ color: "red", fontSize: '12px' }}> This Field is Required</span > : !validEmail ? <span style={{ color: "red", fontSize: '12px' }}>Enter valid email</span> : ''}
                            </div>

                            <div className='form-input-field'>
                                <label htmlFor="">Password</label>
                                <input
                                    value={formData.password}
                                    type="text"
                                    placeholder='Company Name'
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                {error && formData.password.length === 0 ? <span style={{ color: "red", fontSize: '12px' }}> This Field is Required</span> : ''}
                            </div>
                            <div className='form-input-field'>
                                <label htmlFor="">Country</label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country_id}
                                    onChange={(e) => setFormData({ ...formData, country_id: e.target.value })}
                                >
                                    <option>select country</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Aland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">Antigua and Barbuda</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia</option>
                                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                    <option value="BA">Bosnia and Herzegovina</option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">British Indian Ocean Territory</option>
                                    <option value="BN">Brunei Darussalam</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">Central African Republic</option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">Cocos (Keeling) Islands</option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo</option>
                                    <option value="CD">Congo, Democratic Republic of the Congo</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="CI">Cote D'Ivoire</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curacao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">Dominican Republic</option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">Equatorial Guinea</option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">French Southern Territories</option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">Heard Island and Mcdonald Islands</option>
                                    <option value="VA">Holy See (Vatican City State)</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran, Islamic Republic of</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                    <option value="KR">Korea, Republic of</option>
                                    <option value="XK">Kosovo</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Lao People's Democratic Republic</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libyan Arab Jamahiriya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">Micronesia, Federated States of</option>
                                    <option value="MD">Moldova, Republic of</option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="AN">Netherlands Antilles</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="MP">Northern Mariana Islands</option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PW">Palau</option>
                                    <option value="PS">Palestinian Territory, Occupied</option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Reunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russian Federation</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="BL">Saint Barthelemy</option>
                                    <option value="SH">Saint Helena</option>
                                    <option value="KN">Saint Kitts and Nevis</option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="MF">Saint Martin</option>
                                    <option value="PM">Saint Pierre and Miquelon</option>
                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="ST">Sao Tome and Principe</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="CS">Serbia and Montenegro</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SX">Sint Maarten</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">Syrian Arab Republic</option>
                                    <option value="TW">Taiwan, Province of China</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">Tanzania, United Republic of</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">Trinidad and Tobago</option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">Turks and Caicos Islands</option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="US">United States</option>
                                    <option value="UM">United States Minor Outlying Islands</option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="VN">Viet Nam</option>
                                    <option value="VG">Virgin Islands, British</option>
                                    <option value="VI">Virgin Islands, U.s.</option>
                                    <option value="WF">Wallis and Futuna</option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                </select>
                                {error && formData.country_id.length === 0 ? <span style={{ color: "red", fontSize: '12px' }}> This Field is Required</span> : ''}
                            </div>
                            <div className='form-input-field'>
                                <label htmlFor="">Industry</label>
                                <select
                                    name="industry"
                                    id="industry"
                                    value={formData.industry}
                                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                >
                                    <option value="">Select Industry</option>
                                    <option value="Healthcare & Medical">Healthcare & Medical</option>
                                    <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                                    <option value="Human Resources & Recruitment">Human Resources & Recruitment</option>
                                    <option value="Information & Communication Technology">  Information & Communication Technology</option>
                                    <option value="Insurance & Superannuation">  Insurance & Superannuation</option>
                                    <option value="Legal">Legal</option>
                                    <option value=" Manufacturing, Transport & Logistics"> Manufacturing, Transport & Logistics</option>
                                    <option value="Marketing & Communications">Marketing & Communications</option>
                                    <option value=" Mining, Resources & Energy"> Mining, Resources & Energy</option>
                                    <option value="Real Estate & Property">Real Estate & Property</option>
                                    <option value=" Retail & Consumer Products"> Retail & Consumer Products</option>
                                    <option value="Sales">Sales</option>
                                </select>
                                {error && formData.industry.length === 0 ? <span style={{ color: "red", fontSize: '12px' }}> This Field is Required</span> : ''}
                            </div>
                            <div className='form-input-field'>
                                <label htmlFor="">Employee Count</label>
                                <input
                                    value={formData.employee_count}
                                    type="number"
                                    placeholder='Employee Count'
                                    onChange={(e) => setFormData({ ...formData, employee_count: e.target.value })}
                                />
                                {error && formData.employee_count.length === 0 ? <span style={{ color: "red", fontSize: '12px' }}> This Field is Required</span> : ''}
                            </div>
                            <div className='form-input-field'>
                                <label htmlFor="">Client Mobile Number</label>
                                <input
                                    value={formData.client_mobile_number}
                                    type="text"
                                    placeholder='Client Mobile Number'
                                    onChange={(e) => setFormData({ ...formData, client_mobile_number: e.target.value })}
                                />
                                {error && formData.client_mobile_number.length === 0 ? <span style={{ color: "red", fontSize: '12px' }}> This Field is Required</span> : ''}
                            </div>

                        </div>
                        {/* <h2 style={{ fontWeight: "400", margin: "10px 0" }}>KYC Update</h2>
                        <div className='client-kyc'>
                            <div className='form-input-field'>
                                <label htmlFor="">Company Name</label>
                                <input
                                    type="text"
                                    placeholder='Company Name'
                                />
                            </div>
                            <div className='form-input-field'>
                                <label htmlFor="">Company Name</label>
                                <input
                                    type="text"
                                    placeholder='Company Name'
                                />
                            </div>
                            <div className='form-input-field'>
                                <label htmlFor="">Company Name</label>
                                <input
                                    type="text"
                                    placeholder='Company Name'
                                />
                            </div>
                        </div> */}
                        <div className='add-button'>
                            <button type='submit' onClick={addClient}>Add Client</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddClient