import{c as u}from"./vendor.5a2ebfa0.js";const m=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};m();const i=document.getElementById("email-button"),r=document.getElementById("email-input"),a=document.getElementById("email-error-icon"),f=document.getElementById("email-error-message");let s=!0;async function y(l){l.preventDefault();const o=r==null?void 0:r.value;await u().required().email().isValid(o)?s||(r==null||r.classList.remove("border-soft-red","border-2"),r==null||r.classList.add("border-desaturated-red","border"),a.style.display="",f.style.display="",s=!0):s&&(r==null||r.classList.add("border-soft-red","border-2"),r==null||r.classList.remove("border-desaturated-red","border"),a.style.display="block",f.style.display="block",s=!1)}i==null||i.addEventListener("click",y);