import*as e from"react";import{BsEmojiSmile as r}from"react-icons/bs";import{useServices as d}from"sittly-devtools/dist/hooks/context";import{Badge as o}from"sittly-devtools/dist/components/badge";import{Button as a}from"sittly-devtools/dist/components/button";import{Checkbox as u}from"sittly-devtools/dist/components/checkbox";import{Fieldset as t}from"sittly-devtools/dist/components/fieldset";import{Input as i}from"sittly-devtools/dist/components/input";import{RadioGroup as c,RadioGroupItem as n}from"sittly-devtools/dist/components/radio";import{Slider as p}from"sittly-devtools/dist/components/slider";import{Switch as f}from"sittly-devtools/dist/components/switch";var x=()=>e.createElement("div",{className:"flex flex-col gap-2"},e.createElement("h1",{className:"text-3xl font-bold leading-none"},"UI Elements "),e.createElement("p",{className:"mb-6 leading-none text-muted-foreground"},"Showroom of UI elements"," ",e.createElement("a",{className:"text-xs font-normal underline",href:"https://ui.shadcn.com/"},"based on Shadcn UI"))),s=({children:l})=>e.createElement("div",{className:"flex items-center gap-2"},e.createElement("h2",{className:"text-sm font-medium leading-none text-muted-foreground whitespace-nowrap"},l)," ",e.createElement("hr",{className:"block w-full text-neutral-100"})),R=[{name:"Emojis",route:"/emojis",component:()=>{let l=d(m=>m.setContextMenuOptions);return e.createElement("main",{className:"flex flex-col h-full gap-4 px-4 py-2 overflow-y-auto"},e.createElement(x,null),e.createElement(s,null,"Badges"),e.createElement("hgroup",{className:"flex items-center gap-2 mb-4"},e.createElement(o,{variant:"default"},"default"),e.createElement(o,{variant:"destructive"},"destructive"),e.createElement(o,{variant:"secondary"},"secondary"),e.createElement(o,{variant:"outline"},"outline")),e.createElement(s,null,"Buttons"),e.createElement("hgroup",{className:"grid items-center grid-cols-3 gap-2"},e.createElement(a,{className:"w-full",variant:"default"},"default"),e.createElement(a,{className:"w-full",variant:"destructive"},"destructive"),e.createElement(a,{className:"w-full",variant:"secondary"},"secondary"),e.createElement(a,{className:"w-full",variant:"outline"},"outline"),e.createElement(a,{className:"w-full",variant:"ghost"},"ghost"),e.createElement(a,{className:"w-full",variant:"link",asChild:!0},e.createElement("a",{href:"#"},"link use asChild prop"))),e.createElement(s,null,"Form inputs"),e.createElement("hgroup",{className:"flex flex-col gap-2 mb-4"},e.createElement(u,null,e.createElement(t.Label,{className:"min-w-[120px]"},"Accept terms and conditions"),e.createElement(t.Details,null,"You must accept our terms and conditions to continue")),e.createElement(i,null,e.createElement(t.Label,{className:"min-w-[120px]"},"Text"),e.createElement(a,{className:"h-8 ",variant:"default"},"default")),e.createElement(i,{type:"file"},e.createElement(t.Label,{className:"min-w-[120px]"},"Files")),e.createElement(i,{type:"number"},e.createElement(t.Label,{className:"min-w-[120px]"},"Number")),e.createElement(i,{type:"password"},e.createElement(t.Label,{className:"min-w-[120px]"},"Password")),e.createElement(p,{defaultValue:[22]},e.createElement(t.Label,{className:"min-w-[120px]"},"Slider")),e.createElement(f,null,e.createElement(t.Label,{className:"min-w-[120px]"},"Switch")),e.createElement(c,null,e.createElement(t.Label,{className:"min-w-[120px]"},"Radio 1"),e.createElement(n,{value:"1"},e.createElement(t.Label,{className:"min-w-[120px]"},"Radio 1"),e.createElement(t.Details,null,"Radio 1 details")),e.createElement(n,{value:"2"},e.createElement(t.Label,{className:"min-w-[120px]"},"Radio 2"),e.createElement(t.Details,null,"Radio 2 details")))))},description:"A collection of emojis",icon:e.createElement(r,null)}],C={name:"Emojis",description:"Emojis for everyone!",icon:e.createElement(r,null),repoUrl:"https://github.com/JulianKominovic/sittly-emoji-extension"};export{C as metadata,R as pages};
