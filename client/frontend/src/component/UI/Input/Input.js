import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import classes from './Input.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const input = props => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
      inputClasses.push(classes.Invalid);
    } else if (props.touched) {
      inputClasses.push(classes.Valid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = 
                
                <Input
                    {...props.elementConfig}
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}
                    style={{ fontSize: '1.4rem' }}

                >
                </Input>;
            break;
        case 'text':
            inputElement =
                <TextField
                    classes={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    id="outlined-basic"
                    variant="outlined"
                    label={props.label}
                    style={{ margin: 8, width: '90%' }}
                    fullWidth
                    margin="normal"
                />;
            break;
        case ( 'textarea'):
            inputElement = 
                <TextField
                    multiline
                    // className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    id="outlined-basic"
                    variant="outlined"
                    label={props.label}
                    style={{ margin: 8, width: '60%' }}
                    fullWidth
                    margin="normal"
                />;
            break;
        case ( 'select'):
                inputElement = 
                    <Aux classes={classes.marginControl}>
                        <InputLabel
                            className={classes.Label}
                            style={{ display: 'inline', color: '#000000', fontSize: '1.4rem', marginLeft: '1rem', marginTop: '2rem' }}>{ props.label }</InputLabel>
                        <Select
                            native
                            className={inputClasses.join(' ')}
                            value={props.value}
                            onChange={props.changed}
                            inputProps={{
                                name: '',
                                id: '',
                            }}
                            style={{ width: '101.4%' }}
                            >
                            {props.elementConfig.options.map(option => (
                                <option
                                    key={option.value}
                                    value={option.value}>{option.displayValue}</option>
                            ))}
                        </Select>
                    </Aux>
                    
                break;
        case ('radio'):
                  inputElement =
                  <Aux classes={classes.marginControl}>
                  <InputLabel
                      className={classes.Label}
                      style={{ display: 'inline', color: '#000000', fontSize: '1.4rem', marginLeft: '1rem', marginTop: '2rem' }}>{ props.label }</InputLabel>
                  
                        <div className={classes.radioContainer}>
                            <input id="toggle-on" className={classes.toggle + ' ' + classes.toggleLeft} name="toggle" value="false" type="radio" checked />
                            <label htmlFor="toggle-on" className={classes.btn}>Yes</label>
                            <input id="toggle-off" className={classes.toggle + ' ' + classes.toggleRight} name="toggle" value="true" type="radio" />
                            <label htmlFor="toggle-off" className={classes.btn}>No</label>
                        </div>
                    </Aux>;
                break;
        case ( 'select2'):
                inputElement =
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '1rem', marginTop: '2rem', width: '100.4%'  }}>
                        <InputLabel
                            className={classes.Label}
                            style={{ display: 'inline', color: '#000000', fontSize: '1.4rem', marginLeft: '1rem', marginTop: '2rem' }}>{ props.label }</InputLabel>
                        
                    <Select        
                        native
                        className={inputClasses.join(' ')}
                        value={props.value}
                        onChange={props.changed}
                        inputProps={{
                            name: '',
                            id: '',
                        }}
                        style={{ width: '48%' }}
                        >
                        {props.elementConfig.options1.map(option => (
                            <option
                                key={option.value}
                                value={option.value}>{option.displayValue}</option>
                        ))}
                    </Select>

                    <Select        
                        native
                        className={inputClasses.join(' ')}
                        value={props.value}
                        onChange={props.changed}
                        inputProps={{
                            name: '',
                            id: '',
                        }}
                        style={{ width: '48%' }}
                        >
                        {props.elementConfig.options2.map(option => (
                            <option
                                key={option.value}
                                value={option.value}>{option.displayValue}</option>
                        ))}
                    </Select>
                  </div>
                    ;
                break;
        default:
            inputElement = <input
                {...props.elementConfig}
                className={inputClasses.join(' ')}
                value={props.value} />
    }

    return (
        <div className={classes.Input} style={{ textAlign: 'left' }}>
            <FormControl className={classes.formControl} style={{ width: '100%' }}>       
                {inputElement}
            </FormControl>
        </div>
    );
}

export default input;
