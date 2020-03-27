import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import axios from 'axios';
import classes from './CreateTeacher.css';
import Input from '../UI/Input/Input';
import Spinner from '..//UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';


class CreateTeacher extends Component {
    state = {
        createTeacherForm: {
            name: {
                elementLabel: 'Name',
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Satyajit',
                    name: 'name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            fatherOrSpouseName: {
                elementLabel: "Father's/Spouse's name",
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Manohar',
                    name: 'fatherOrSpouseName'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            address: {
                elementLabel: "Address",
                elementType: 'textarea',
                elementConfig: {
                    rows: 5,
                    placeholder: 'Nehru park',
                    name: 'address'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            dob: {
                elementLabel: "D.O.B.",
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: '12-06-17',
                    name: 'dob'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            aadharNumber: {
                elementLabel: "Aadhar Number",
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: '784564545645',
                    name: 'aadharNumber'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            accountNumber: {
                elementLabel: "Account number",
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: '784564545645',
                    name: 'accountNumber'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            // Needs to be updated
            photo: {
                elementLabel: "Photo",
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'asasd.jpeg',
                    name: 'photo'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            email: {
                elementLabel: 'E-mail',
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'abcd@gmail.com',
                    name: 'email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            dateOfJoining: {
                elementLabel: "Date of Joining",
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: '12-06-17',
                    name: 'dateOfJoining'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            password: {
                elementLabel: 'Password',
                elementType: 'text',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password',
                    name: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            positionOfResponsibility: {
                elementLabel: "positionOfResponsibility",
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Head',
                    name: 'positionOfResponsibility'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            education: {
                elementLabel: "Education",
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'XI',
                    name: 'Education'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            salary: {
                elementLabel: "Salary",
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: '665656',
                    name: 'salary'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            SSSMID: {
                elementLabel: "SSSMID",
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'afasf66',
                    name: 'SSSMID'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            }
        },
        loading: false,
        formIsValid: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = ( event, inputIdentifier ) => {
        const updatedCreateTeacherForm = {
            ...this.state.createTeacherForm
        };
        const updatedFormElement = {
            ...updatedCreateTeacherForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;

        updatedCreateTeacherForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedCreateTeacherForm) {
            formIsValid = updatedCreateTeacherForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({createTeacherForm: updatedCreateTeacherForm, formIsValid: formIsValid});
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        const data = {
            name: this.state.createTeacherForm.name.value,
            fatherOrSpouseName: this.state.createTeacherForm.fatherOrSpouseName.value,
            address: this.state.createTeacherForm.address.value,
            dob: this.state.createTeacherForm.dob.value,
            aadharNumber: this.state.createTeacherForm.aadharNumber.value,
            accountNumber: this.state.createTeacherForm.accountNumber.value,
            photo: this.state.createTeacherForm.photo.value,
            email: this.state.createTeacherForm.email.value,
            dateOfJoining: this.state.createTeacherForm.dateOfJoining.value,
            password: this.state.createTeacherForm.password.value,
            positionOfResponsibility: this.state.createTeacherForm.positionOfResponsibility.value,
            education: this.state.createTeacherForm.education.value,
            salary: this.state.createTeacherForm.salary.value,
            SSSMID: this.state.createTeacherForm.SSSMID.value
        }

        console.log(data);

        axios.post('http://localhost:5000/api/admin/createTeacher', data)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render () {
        const formElementsArray = [];
        for(let key in this.state.createTeacherForm) {
            formElementsArray.push({
                id: key,
                config: this.state.createTeacherForm[key]
            })
        }

        let form =
            <form className={classes.CreateTeacherForm}
                  >
                {formElementsArray.map(formElement => (
                    <Aux>
                        <Input
                          key={formElement.id}
                          elementType={formElement.config.elementType}
                          elementConfig={formElement.config.elementConfig}
                          value={formElement.config.value}
                          invalid={!formElement.config.valid}
                          shouldValidate={formElement.config.validation}
                          touched={formElement.config.touched}
                          changed={(event) => this.inputChangedHandler(event, formElement.id)}
                          label={formElement.config.elementLabel}>
                        </Input>
                    </Aux>
                ))}
                <Button
                    type="submit"
                    name="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    endIcon={<ArrowForwardIcon />}
                    onClick={this.onSubmitForm}
                >
                    Create Teacher
                </Button>
            </form>;

        if (this.state.loading)
            form = <Spinner></Spinner>

        return (
            <div className={classes.CreateTeacher + ' ' + 'container'}>
                {form}
            </div>
        );
    }
}

export default CreateTeacher;
