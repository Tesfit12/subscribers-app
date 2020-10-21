import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import { TiArrowRightThick } from "react-icons/ti";
import "react-autocomplete-input/dist/bundle.css";
import ReactChipInput from "react-chip-input";
import ProgressBar from "./ProgressBar";
import ValidatePage from "./ValidatePage";
import OvalShapeProgressBar from "./OvalShapeProgressBar";
import styled from "@emotion/styled";

export default function AllProspectsPage({ nextHandler }) {



  const [allCampaigns, setAllCampaigns] = useState([]);
  const [inputFormsData, setInputFormsData] = useState(JSON.parse(localStorage.getItem("inputForms"))); //[['aaaa', 'bbbb'], ['www'], ['one', 'three']

  const [questionsPageData, setQuestionsPageData] = useState(JSON.parse(localStorage.getItem("questionsPage")));
  const [loading, setLoading] = useState(false);
  console.log(inputFormsData);




  //* ================================================================================ */




  useEffect(() => {
    addToDataBase();
    getUserData();
  }, []);

  const addToDataBase = async () => {
    let body = {
      michel_id: "107",
      michel_name: "Foo",
      query_position: inputFormsData[0].join("/"),
      query_volum: inputFormsData[1].join("/"),
      query_location: inputFormsData[3].join("/"),
      query_industry: inputFormsData[2].join("/"),
      max_prospect: 0,
      counter_prospect: 0,
      counter_search_day: 0,
      counter_conexion_day: 0,
      counter_messages_day: 0,
      network_one: questionsPageData.choseTop,
      network_two: questionsPageData.choseBottom,
    };

    let userAccount = await fetch(`http://localhost:5000/addUserData`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await userAccount.json();
    console.log(result, " <-==== Added Successfully to DB");
  };

  {
    /* ================================================================================ */
  }
  {
    /* ================================================================================ */
  }

  // get all campaign
  const getUserData = async () => {
    const response = await fetch("http://localhost:5000/user/1");
    let userData = await response.json();
    console.log(userData);

    // if check_parameters func did NOT find and prospect from LinkedIn
    // we need to set the Loading to true as well ==-> else u won't see any thing on the page
    if (!userData.length) return setLoading(true);
    return setAllCampaigns(userData[0]), setLoading(true);
  };

  {
    /* ================================================================================ */
  }

  {
    /* ================================================================================ */
  }

  return (
    <div>
      {!loading ? (
        <div style={{ marginTop: "12%" }}>
          <center>
            <Spinner
              variant="primary"
              animation="border"
              role="status"
            ></Spinner>
          </center>
          <center>
            <ProgressBar />
          </center>
        </div>
      ) : (
          <ValidatePage
            nextHandler={nextHandler}
            inputFormsData={inputFormsData}
            questionsPageData={questionsPageData}
            allCampaigns={allCampaigns}
          />
        )}
    </div>
  );
}
