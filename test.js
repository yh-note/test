// React와 Framer Motion 라이브러리에서 필요한 기능들을 가져옵니다
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addPropertyControls,ControlType}from"framer";import{useState}from"react";import{motion}from"framer";import{createBackground,Border,parsePadding,fillProp,borderProp,shadowsProp,createId}from"https://framerusercontent.com/modules/652tb31Lm1c5joOPVhHw/Np8L9tQ7xc6NeRBcKCRy/FramerFormsShared.js";/**
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 400
 */export default function TextInput(props){// props에서 필요한 값들을 추출합니다
// type: 입력창의 종류 (일반 입력창 또는 여러 줄 입력창)
// textAreaHeight: 여러 줄 입력창의 높이 설정
// shadows: 그림자 효과 설정
// border: 테두리 설정
const{type,textAreaHeight,shadows,border}=props;// console.log(textAreaHeight) // ^^
// 컴포넌트의 고유 ID를 설정합니다
// props로 id가 전달되면 그것을 사용하고, 없으면 새로운 ID를 생성합니다
const id=props.id||createId();// 입력창의 종류에 따라 HTML 요소를 결정합니다
// type이 "textArea"면 여러 줄 입력이 가능한 textarea를 사용하고
// 그렇지 않으면 한 줄 입력용 input을 사용합니다
const Element=type=="textArea"?"textarea":"input";// 입력창의 상태를 관리하는 변수들입니다
// focused: 현재 입력창이 포커스되어 있는지 여부
// invalid: 입력값이 유효하지 않은지 여부
const[focused,setFocused]=useState(false);const[invalid,setInvalid]=useState(false);// 추가적인 HTML 속성들과 스타일을 저장할 객체를 초기화합니다
let attributes={};let styles={};// console.log(type) // ^^
// 여러 줄 입력창(textarea)인 경우의 특별한 설정들
if(type=="textArea"){// padding 값을 상/우/하/좌로 분리합니다
const[pt,pr,pb,pl]=parsePadding(props.padding);const heightMode=textAreaHeight.mode;// 브라우저가 content-sizing을 지원하는지 확인합니다
// 지원하지 않는 경우를 위한 대체 동작을 설정하기 위함입니다
const autoHeightSupported=typeof CSS!=="undefined"?CSS.supports("field-sizing","content"):true;// 고정 높이 모드일 때는 지정된 줄 수를, 아니면 1을 설정합니다
attributes.rows=heightMode=="fixed"?textAreaHeight.lines:1;// textarea의 스타일을 설정합니다
styles={display:"block",// 최소 높이 설정 (자동 높이 조절이 지원되지 않을 때의 대체 높이 포함)
minHeight:heightMode=="auto"&&!autoHeightSupported?`calc(${textAreaHeight.fallbackLines}lh + ${pt+pb}px)`:heightMode!=="fixed"?`calc(${textAreaHeight.minLines}lh + ${pt+pb}px)`:undefined,// 최대 높이 설정 (고정 높이가 아닐 때만)
maxHeight:heightMode!=="fixed"?`calc(${textAreaHeight.maxLines}lh + ${pt+pb}px)`:undefined,// 자동 높이 조절 설정
fieldSizing:heightMode=="auto"&&autoHeightSupported?"content":undefined,// 크기 조절 가능 여부 설정
resize:heightMode=="resizable"?"vertical":"none"};}// console.log(attributes) // ^^
// 입력창이 포커스를 받았을 때 실행되는 함수
const onFocus=()=>{var // props로 전달된 포커스 이벤트 핸들러가 있다면 실행
_props_focusEvent;setFocused(true);(_props_focusEvent=props.focusEvent)===null||_props_focusEvent===void 0?void 0:_props_focusEvent.call(props);// 이전에 유효하지 않은 상태였다면 초기화
if(invalid){setInvalid(false);}};// 입력창이 포커스를 잃었을 때 실행되는 함수
const onBlur=()=>{var // props로 전달된 블러 이벤트 핸들러가 있다면 실행
_props_blurEvent;setFocused(false);(_props_blurEvent=props.blurEvent)===null||_props_blurEvent===void 0?void 0:_props_blurEvent.call(props);};// 입력값이 유효하지 않을 때 실행되는 함수
const onInvalid=event=>{var // props로 전달된 유효하지 않음 이벤트 핸들러가 있다면 실행
_props_invalidEvent;// 기본 브라우저 동작을 막습니다
event.preventDefault();setInvalid(true);(_props_invalidEvent=props.invalidEvent)===null||_props_invalidEvent===void 0?void 0:_props_invalidEvent.call(props);};// console.log(props.font)  // ^^
// console.log(props.value) // ^^
// JSX를 반환합니다
return /*#__PURE__*/_jsxs(motion.div,{"data-framerforms":true,id:id,onFocus:onFocus,onBlur:onBlur,// 애니메이션 효과를 설정합니다
animate:{// 배경, 그림자, 테두리 색상을 상태에 따라 다르게 설정
...createBackground(props.fill,null,focused,invalid),boxShadow:invalid&&(shadows===null||shadows===void 0?void 0:shadows.invalid)||focused&&(shadows===null||shadows===void 0?void 0:shadows.focus)||(shadows===null||shadows===void 0?void 0:shadows.default),borderColor:invalid&&(border===null||border===void 0?void 0:border.colorInvalid)||focused&&(border===null||border===void 0?void 0:border.colorFocus)||(border===null||border===void 0?void 0:border.color)},style:{borderRadius:props.radius,// textarea일 때 스크롤바 설정
overflow:type=="textArea"&&props.textAreaScrollbar=="auto"?"hidden":"visible",...props.style},initial:false,transition:props.transition,children:[/*#__PURE__*/_jsx(Element,{name:props.name,required:props.required,autoFocus:props.autoFocus,placeholder:props.placeholder,minLength:props.minLengthEnabled?props.minLength:undefined,maxLength:props.maxLengthEnabled?props.maxLength:undefined,defaultValue:props.value,onInvalid:onInvalid,style:{display:"block",padding:props.padding,color:props.color,background:"none",border:"none",textOverflow:"ellipsis",...styles,...props.font,...props.style},...attributes}),/*#__PURE__*/_jsx(Border,{...props.border,transition:props.transition}),/*#__PURE__*/_jsx("style",{children:`#${id} ${Element}::placeholder {
                    color: ${props.placeholderColor};
                }
                #${id} ${Element}:focus {
                    appearance: none;
                    outline: none;
                    border: none;
                    display: none;
                }`}),type=="textArea"&&props.textAreaScrollbar=="hidden"&&/*#__PURE__*/_jsx("style",{children:`#${id} textarea::-webkit-scrollbar {
                        display: none; /* WebKit 브라우저용 (Chrome, Safari) */
                    }
                    #${id} textarea {
                        -ms-overflow-style: none; /* IE와 Edge용 */
                        scrollbar-width: none; /* Firefox용 */
                    }`})]});}// 컴포넌트의 표시 이름 설정
TextInput.displayName="Text Input";addPropertyControls(TextInput,{name:{type:ControlType.String,defaultValue:"Text",preventLocalization:true},required:{type:ControlType.Boolean,defaultValue:false},autoFocus:{type:ControlType.Boolean,defaultValue:false,title:"Auto-Focus"},minLengthEnabled:{type:ControlType.Boolean,defaultValue:false,title:"Min Length"},minLength:{type:ControlType.Number,defaultValue:100,min:0,step:1,displayStepper:true,title:" ",hidden:props=>!props.minLengthEnabled},maxLengthEnabled:{type:ControlType.Boolean,defaultValue:false,title:"Max Length"},maxLength:{type:ControlType.Number,defaultValue:100,min:0,step:1,displayStepper:true,title:" ",hidden:props=>!props.maxLengthEnabled},value:{type:ControlType.String,placeholder:"Default Value"},type:{type:ControlType.Enum,defaultValue:"input",// defaultValue: "textArea",
options:["textArea","input"],optionTitles:["Yes","No"],displaySegmentedControl:true,title:"Text Area"},textAreaHeight:{type:ControlType.Object,title:"Height",controls:{mode:{type:ControlType.Enum,defaultValue:"auto",options:["auto","resizable","fixed"],optionTitles:["Auto","Resizable","Fixed"],displaySegmentedControl:true,segmentedControlDirection:"vertical"},minLines:{type:ControlType.Number,defaultValue:3,min:1,step:1,displayStepper:true,hidden:props=>props.mode==="fixed"},maxLines:{type:ControlType.Number,defaultValue:8,min:1,step:1,displayStepper:true,hidden:props=>props.mode==="fixed"},lines:{type:ControlType.Number,defaultValue:5,min:1,step:1,displayStepper:true,hidden:props=>props.mode!=="fixed"},fallbackLines:{type:ControlType.Number,defaultValue:5,min:1,step:1,title:"Fallback",description:"Auto height is [not supported on all browsers](https://caniuse.com/mdn-css_properties_field-sizing_content). Fallback is used when auto height is not supported.",hidden:props=>props.mode!=="auto"}},hidden:props=>props.type!="textArea"},textAreaScrollbar:{type:ControlType.Enum,defaultValue:"hidden",options:["auto","hidden"],optionTitles:["Auto","Hidden"],displaySegmentedControl:true,title:"Scrollbar",hidden:props=>props.type!="textArea"},placeholder:{type:ControlType.String,defaultValue:"Write here..."},font:{type:"font",controls:"extended",defaultFontType:"sans-serif",defaultValue:{fontSize:14,lineHeight:1.2}},color:{type:ControlType.Color,defaultValue:"#999999"},placeholderColor:{type:ControlType.Color,defaultValue:"#999999",title:"Placeholder"},fill:fillProp(),radius:{type:ControlType.BorderRadius,defaultValue:"10px"},padding:{type:ControlType.Padding,defaultValue:"12px"},border:borderProp(),shadows:shadowsProp(),transition:{type:ControlType.Transition,defaultValue:{type:false}},focusEvent:{type:ControlType.EventHandler,title:"Focus"},blurEvent:{type:ControlType.EventHandler,title:"Blur"},invalidEvent:{type:ControlType.EventHandler,title:"Invalid"}});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"TextInput","slots":[],"annotations":{"framerSupportedLayoutHeight":"any","framerSupportedLayoutWidth":"fixed","framerContractVersion":"1","framerIntrinsicWidth":"400"}},"__FramerMetadata__":{"type":"variable"}}}
