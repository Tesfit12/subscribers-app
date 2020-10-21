import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "react-autocomplete-input/dist/bundle.css";
import ReactChipInput from "react-chip-input";
import "react-autocomplete-input/dist/bundle.css";
import ZoneChips from "./allInputForms/ZoneChips";
import Chips from "react-chips";
import FaceIcon from "@material-ui/icons/Face";
import Chip from "@material-ui/core/Chip";
import ChipInput from "material-ui-chip-input";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import CountrySelect from "./ZoneGeo";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import arrow_image from "../images/arrow_image.png";

import AllCountries from "./Countries";



const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(1),
    minWidth: "99.8%",
    maxWidth: 300,

    // border: "1px solid grey",
    borderRadius: 4,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 5,
  },
  noLabel: {
    margin: theme.spacing(3),
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 234,
      minWidth: 120,
      marginTop: 40,
    },
  },
};





const InputForm = ({ nextHandler }) => {





  const inputRef = useRef()
  const classes = useStyles();

  let ER = "ER".replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));

  var zoneList = [`Eritrea ${ER}`, "Germany", "Greece", "Hungary"];
  var names = [`Eritrea ${ER}`, "Germany", "Greece", "Hungary"];

  const [poste, setPoste] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [zone, setZone] = useState([]);
  const [effectif, setEffectif] = useState([]);
  const [dataOfInputForms, setDataOfInputForms] = useState([]);
  console.log(dataOfInputForms);
  console.log(poste);



  // TODO// =====================================================================


  useEffect(() => {
    localStorage.setItem("inputForms", JSON.stringify([poste, industry, zone, effectif]));
  }, [poste, industry, zone, effectif]);


  // TODO// ====================================================================

  const HandleNextHandler = () => {
    nextHandler(poste, industry);

  };

  // TODO// =====================================================================

  const posteHandler = (e, value) => {
    if (e.keyCode === 13) {
      setPoste([...poste, value]);
    } else if (e.keyCode == 8) {
      let newPoste = [...poste]
      newPoste.pop();
      setPoste(newPoste)
    }
  };


  // TODO//  =====================================================================
  const industryHandler = (e, value) => {
    if (e.keyCode === 13) {
      setIndustry([...industry, value]);
    } else if (e.keyCode == 8) {
      let newIndustry = [...industry]
      newIndustry.pop()
      setIndustry(newIndustry)
    }
  };



  // TODO// =====================================================================

  const zoneHandlerOnKeyDown = (e, value) => {
    if (e.keyCode == 8) {
      let newZone = [...zone]
      newZone.pop();
      setZone(newZone)

    } else if (e.keyCode === 13) {
      setZone([])
    }
    else {
      return ''
    }
  }


  ///// TODO ============================================================================

  const handleEffectifChange = (event) => {
    setEffectif(event.target.value);
  };


  ///// TODO ============================================================================


  localStorage.clear();






  return (
    <div className="form-container">
      <Card className="card">
        <Card.Body>
          <h2 className="h2Form">Dummy Hello text of the one typesetting ?</h2>
          <p className="pForm">
            {" "}
            when an printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>

          <Form.Group>
            {/* ================================================================================ */}
            {/* ================================================================================ */}

            <div style={{ width: "100%", marginBottom: "15px" }}>
              <Autocomplete
                multiple
                options={poste.map((option) => option)}
                freeSolo // IMPORTAmt
                renderTags={(poste) =>
                  poste.map((item) => (
                    <Chip
                      variant="outlined"
                      label={item}
                      style={{
                        backgroundColor: "rgb(11, 98, 151)",
                        color: "white",
                        marginRight: '8px'
                      }}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    onKeyDown={(e) =>
                      posteHandler(e, params.inputProps.ref.current.value)
                    }
                    variant="outlined"
                    {...params}
                    placeholder="poste"
                    size="small"

                  />
                )}
              />
            </div>

            {/* ================================================================================ */}
            {/* ================================================================================ */}

            <div style={{ width: "100%", marginBottom: "15px" }}>
              <Autocomplete
                multiple
                options={industry.map((option) => option)}
                freeSolo // IMPORTAmt
                renderTags={(industry) =>
                  industry.map((item) => (
                    <Chip
                      variant="outlined"
                      label={item}
                      style={{
                        backgroundColor: "rgb(11, 98, 151)",
                        color: "white",
                        marginRight: '8px'
                      }}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    onKeyDown={(e) =>
                      industryHandler(e, params.inputProps.ref.current.value)
                    }
                    variant="outlined"
                    {...params}
                    placeholder="Industry...."
                    size="small"
                  />
                )}
              />
            </div>

            {/* ================================================================================ */}
            {/* ================================================================================ */}

            <div style={{ width: "100%", marginBottom: "15px" }}>
              <Autocomplete
                multiple
                options={zoneList}
                // freeSolo // IMPORTAmt will let the user use the Enter keyboard
                getOptionLabel={(option) => option}
                renderOption={(option) => (
                  <React.Fragment>
                    <span onClick={(e) => setZone([...zone, option])} style={{ width: "100%", padding: '4px' }}>
                      {option}
                    </span>
                  </React.Fragment>
                )}
                renderTags={(zoneList) =>
                  zoneList.map((item) => (
                    <Chip
                      variant="outlined"
                      label={item}
                      style={{
                        backgroundColor: "rgb(11, 98, 151)",
                        color: "white",
                        marginRight: '8px'
                      }}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    onKeyDown={(e) => zoneHandlerOnKeyDown(e)}
                    variant="outlined"
                    {...params}
                    placeholder="Zone......"
                    size="small"
                    ref={inputRef}
                  />
                )}
              />
            </div>

            {/* ================================================================================ */}
            {/* ================================================================================ */}


            <div style={{ width: "100%", marginBottom: "15px" }}>

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Effectif</InputLabel>

                <Select multiple inputProps={{ "aria-label": "Without label", name: 'age' }} value={effectif} onChange={handleEffectifChange} input={<Input />} renderValue={(selected) => (
                  <div className={classes.chips}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} className={classes.chip} style={{ backgroundColor: "rgb(11, 98, 151)", color: "white" }} />

                    ))}
                  </div>
                )}
                  MenuProps={MenuProps}
                >


                  {names.map((name) => (
                    <MenuItem key={name} value={name}>{" "}{name}{" "}</MenuItem>
                  ))}
                </Select>

              </FormControl>
            </div>




            {/* ================================================================================ */}
            {/* ================================================================================ */}
          </Form.Group>

          <p>
            * Lorem ext ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>

          <a onClick={HandleNextHandler}>
            <img src={arrow_image} alt="" srcset="" style={{ float: 'right' }} />
          </a>
        </Card.Body >
      </Card >
    </div >
  );
};

export default InputForm;

































// ========================================================================================

// const InputForm = ({ nextHandler })=>  {

//         const [poste, setPoste] = useState([])
//         const [effecti, setEffecti] = useState([])
//         const [industry, setIndustry] = useState([])
//         const [zone, setZone] = useState(["Georgia", "Germany", "Greece", "Hungary"])
//         const [chips, setChips] = useState([])
//         console.log(poste)
//         console.log(effecti)

//         // const classes = useStyles();

//         const textRef = useRef();

//         const focusTextInput = (e) => {
//             setPoste([... poste, e.target.value])

//         }

//         useEffect(() => {
//             localStorage.setItem('inputForms', JSON.stringify([poste, effecti, industry, chips]))
//         }, [poste, effecti, industry, chips])

//         // localStorage.clear();

//             {/* ================================================================================ */}
            // const removeChipPoste = ix => {
            //     const allPoste = poste.slice() // getting all the values every time u add an item
            //     allPoste.splice(ix, 1);
            //     setPoste(allPoste);
            //     };

// const addChipPoste = item => {
//         if (item) setPoste([... poste, item])
//       };

//             {/* ================================================================================ */}

//             const removeChipIndustry = ix => {
//                     const allIndustry = industry.slice() // getting all the values every time u add an item
//                     allIndustry.splice(ix, 1);
//                     setIndustry(allIndustry);
//                     };

//             const addChipIndustry = item => {
//                 if (item) setIndustry([... industry, item])
//                   };

//             {/* ================================================================================ */}

//             const handleDropdownChange = (v)=> {
//                     // check if it already exists
//                     if (!effecti.includes(v)) {
//                         setEffecti([... effecti, v])
//                     }
//                 }

//             const removeChipEffecti = ix => {
//                     const allEffecti = effecti.slice() // getting all the values every time u add an item
//                     allEffecti.splice(ix, 1);
//                     setEffecti(allEffecti);
//                     };

//             const addChipEffecti= item => {
//                     const allEffecti = effecti.slice();
//                     if (item) allEffecti.push(item);
//                     setEffecti(allEffecti);
//                     };

//             {/* ================================================================================ */}

//             {/* ================================================================================ */}

//              const onChangeHandler = chips => {
//                 setChips(chips)
//                }

//                const handleDelete = () => {
//                 console.info('You clicked the delete icon.');
//               };

//               const handleChange = (event) => {
//                 setPoste(event.target.value);
//               };

//     return (

//         <div className="form-container">

//             <Card className='card'>
//               <Card.Body>

//             <h2 className='h2Form'>Dummy Hello text of the one typesetting ?</h2>
//             <p className='pForm'>  when an  printer took a galley of type and scrambled it to make a type specimen book.</p>

//             <Form.Group>

//                       {/* ================================================================================ */}
//                       {/* ================================================================================ */}
//                         <div style={{ display: 'flex', marginBottom: '16px'}}>

//                             <InputGroup.Text>Poste</InputGroup.Text>

//                             <span style={{ color: 'blue', width: '100%' }}>
//                             {/* { effecti.length == 0 ? '' : <Chip label={effecti} onDelete={handleDelete} color="primary" />} */}

//                                 <ReactChipInput
//                                         classes="class1"
//                                         chips={poste}
//                                         onRemove={(ix)=> removeChipPoste(ix)}
//                                         onSubmit={(item)=> addChipPoste(item)}
//                                         />

//                             </span>
//                                                     {/* <div style={{ width: '100%', marginLeft: '0px', minHeight: '53px' }}>
//                                                         <Autocomplete multiple
//                                                                     options={poste.map((option) => option)}
//                                                                     freeSolo // IMPORTAmt
//                                                                     renderTags={(poste, getTagProps) =>
//                                                                                 poste.map((item, index) => (

//                                                                                     <Chip variant="outlined" {...getTagProps({ index })} label={item} style={{ backgroundColor: 'rgb(11, 98, 121)', color: 'white'}} />

//                                                                                 ))
//                                                                             }
//                                                                     renderInput={(params) => (
//                                                                         <TextField onChange={(e)=> focusTextInput(e)} {...params} variant="filled" placeholder="poste" />

//                                                                     )}
//                                                                 />
//                                                     </div> */}
//                                  </div>

//                       {/* ================================================================================ */}
//                       {/* ================================================================================ */}

//                     <div style={{ display: 'flex', marginBottom: '16px'}}>

//                                 <InputGroup.Text>Effectif</InputGroup.Text>
//                                 <span style={{ color: 'blue', width: '100%' }}>
//                                     <ReactChipInput
//                                             classes="class1"
//                                             chips={effecti}
//                                             onRemove={(ix)=> removeChipEffecti(ix)}
//                                             onSubmit={(item)=> addChipEffecti(item)}
//                                             placeholder='Effectif here....'
//                                         />
//                                 </span>

//                                 <select id="dropdown"  onChange={(e)=> handleDropdownChange(e.target.value)}>
//                                         <option value="one">one</option>
//                                         <option value="Two">Two</option>
//                                         <option value="Three">Three</option>
//                                         <option value="Four">Four</option>
//                                 </select>

//                         </div>

//                       {/* ================================================================================ */}
//                       {/* ================================================================================ */}

//                         <div style={{ display: 'flex', marginBottom: '16px'}}>

//                             <InputGroup.Text id="inputGroup-sizing-sm">Industrie</InputGroup.Text>

//                             <span style={{ color: 'blue', width: '100%' }}>
//                                 <ReactChipInput
//                                     classes="class1"
//                                     chips={industry}
//                                     onRemove={(ix)=> removeChipIndustry(ix)}
//                                     onSubmit={(item)=> addChipIndustry(item)}
//                                     />
//                             </span>
//                         </div>

//                       {/* ================================================================================ */}
//                       {/* ================================================================================ */}

//                         <div style={{ display: 'flex', marginBottom: '19px'}}>

//                             <InputGroup.Text id="inputGroup-sizing-md">Zone Geographique</InputGroup.Text>

//                             <div style={{ width: '100%', color: 'blue'}}>

// <Chips
//     placeholder="Enter Here"
//     value={chips}
//     onChange={onChangeHandler}
//     suggestions={zone}

// />
//                             </div>

//                         </div>

//                       {/* ================================================================================ */}
//                       {/* ================================================================================ */}

//                </Form.Group>

//             <p>* Lorem ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

//             <a onClick={()=> nextHandler(poste, industry)}>
//                 <Button variant="outline-primary" style={{ float: "right"}} >Next
//                     <TiArrowRightThick size={25} />
//                 </Button>

//             </a>

//             </Card.Body>
//         </Card>

//         </div>

//     )

// }

// export default InputForm
