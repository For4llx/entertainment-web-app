"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
        background-color: #10141E;
    }
    a {
        text-decoration: none;
    }
    em {
        font-style: normal;
    }
    li {
        list-style: none;
    }
    button {
        border: none;
        background-color: transparent;
    }
    input, textarea {
        border: none;
        outline: none;

    }
    input:focus, textarea:focus {
            outline: none;
    }
`;
