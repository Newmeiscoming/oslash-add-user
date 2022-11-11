import React from "react";
import "../styles/Input.css";
import { MdPublic } from "react-icons/md";
import logo from "../Assets/logo.svg";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

const Input = () => {
  const data = ["Full Access", "Can edit", "Can view", "No Access"];
  const [access,setAccess] = useState("No Access")
  return (
    <div className="input">
      <section id="section-1">
        <div className="shareweb">
          <div>
            <MdPublic style={{ fontSize: "50px", color: "#6B7280" }} />
          </div>
          <div style={{ marginLeft: "15px" }}>
            <p style={{ margin: 0, fontSize: "23px", color: "#111827" }}>
              Share to web
            </p>
            <p style={{ fontSize: "18px", color: "#6B7280", marginBottom: 0 }}>
              Publish and share link with anyone
            </p>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            style={{
              backgroundColor: "#E5E7EB",
              width: "55px",
              height: "32px",
              color: "white",
              border: "none",
            }}
          />
        </div>
      </section>
      <section id="section-2">
        <div className="input-div">
          <input type="text" placeholder="People, emails, groups" />
          <button>Invite</button>
        </div>
        <div className="oslash">
          <div className="oslash-logo">
            <img src={logo} alt="" />
            <div style={{ marginLeft: "20px", paddingTop: "10px" }}>
              <p
                style={{ marginBottom: 0, fontSize: "23px", color: "#111827" }}
              >
                Everyone at OSlash
              </p>
              <p style={{ fontSize: "18px", color: "#6B7280" }}>
                25 workspace members
              </p>
            </div>
          </div>
          <div>
            <button
              style={{
                border: "none",
                background: "#fff",
                fontSize: "17px",
                color: "#6B7280",
              }}
              data-bs-toggle="dropdown"
            >
              {access} <BsChevronDown />
            </button>
            <ul
              class="dropdown-menu dropdown-menu"
              defaultChecked="No Access"
              style={{
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 10px",
              }}
            >
              {data.map(ele=>{
                            let color = "#111827"
                            if(ele==="No Access") color = "red"
                   return <li onClick={()=>setAccess(ele)} style={{color,fontSize:"18px"}} class="dropdown-item">{ele}</li>
                
              })}
                
              
            </ul>
          </div>
        </div>
      </section>
      <section id="section-3">
        <div>
          <p style={{fontSize:"18px",color:"#6B7280",cursor:"pointer"}}>
            <AiOutlineQuestionCircle/> &nbsp; learn about sharing
          </p>
        </div>
        <div>
          <a style={{fontSize:"20px",color:"#111827",textDecoration:"none",cursor:"pointer"}}>
            <span>
              <FaLink />
            </span>
            Copy link
          </a>
        </div>
      </section>
    </div>
  );
};

export default Input;
