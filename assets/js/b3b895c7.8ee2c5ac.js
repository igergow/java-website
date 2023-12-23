"use strict";(self.webpackChunkjava_lessons=self.webpackChunkjava_lessons||[]).push([[8157],{5188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=t(5893),a=t(1151);const i={id:10,slug:"/exercise/10-exceptions",title:"\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0432 Java",description:"\u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043e\u0441\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430 \u043d\u0430 \u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0432 Java \u0441 \u0442\u0435\u0437\u0438 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0438 \u0437\u0430\u0434\u0430\u0447\u0438. \u041f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438 \u0437\u0430 \u0432\u0441\u0438\u0447\u043a\u0438, \u043a\u043e\u0438\u0442\u043e \u0438\u0441\u043a\u0430\u0442 \u0434\u0430 \u0443\u0441\u0432\u043e\u044f\u0442 \u0442\u0430\u0437\u0438 \u0432\u0430\u0436\u043d\u0430 \u0447\u0430\u0441\u0442 \u043e\u0442 \u041e\u041e\u041f.",sidebar_label:"\u0414\u0435\u043c\u043e \u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",sidebar_class_name:"java-exceptions-demo",hide_title:!1,hide_table_of_contents:!1,draft:!1,unlisted:!1,keywords:["Java","\u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f","\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f","\u041e\u041e\u041f"],image:"/images/exercises.jpg",tags:["\u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f","\u043e\u043e\u043f","\u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"]},r="\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u043c\u0443\u0437\u0438\u043a\u0430\u043b\u043d\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438 (\u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f)",l={id:"exams/10",title:"\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0432 Java",description:"\u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043e\u0441\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430 \u043d\u0430 \u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0432 Java \u0441 \u0442\u0435\u0437\u0438 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0438 \u0437\u0430\u0434\u0430\u0447\u0438. \u041f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438 \u0437\u0430 \u0432\u0441\u0438\u0447\u043a\u0438, \u043a\u043e\u0438\u0442\u043e \u0438\u0441\u043a\u0430\u0442 \u0434\u0430 \u0443\u0441\u0432\u043e\u044f\u0442 \u0442\u0430\u0437\u0438 \u0432\u0430\u0436\u043d\u0430 \u0447\u0430\u0441\u0442 \u043e\u0442 \u041e\u041e\u041f.",source:"@site/docs/exams/10-exceptions.md",sourceDirName:"exams",slug:"/exercise/10-exceptions",permalink:"/exercise/10-exceptions",draft:!1,unlisted:!1,tags:[{label:"\u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f",permalink:"/tags/\u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f"},{label:"\u043e\u043e\u043f",permalink:"/tags/\u043e\u043e\u043f"},{label:"\u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",permalink:"/tags/\u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"}],version:"current",sidebarPosition:10,frontMatter:{id:"10",slug:"/exercise/10-exceptions",title:"\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0432 Java",description:"\u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043e\u0441\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430 \u043d\u0430 \u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0432 Java \u0441 \u0442\u0435\u0437\u0438 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0438 \u0437\u0430\u0434\u0430\u0447\u0438. \u041f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438 \u0437\u0430 \u0432\u0441\u0438\u0447\u043a\u0438, \u043a\u043e\u0438\u0442\u043e \u0438\u0441\u043a\u0430\u0442 \u0434\u0430 \u0443\u0441\u0432\u043e\u044f\u0442 \u0442\u0430\u0437\u0438 \u0432\u0430\u0436\u043d\u0430 \u0447\u0430\u0441\u0442 \u043e\u0442 \u041e\u041e\u041f.",sidebar_label:"\u0414\u0435\u043c\u043e \u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",sidebar_class_name:"java-exceptions-demo",hide_title:!1,hide_table_of_contents:!1,draft:!1,unlisted:!1,keywords:["Java","\u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f","\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f","\u041e\u041e\u041f"],image:"/images/exercises.jpg",tags:["\u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f","\u043e\u043e\u043f","\u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"]},sidebar:"tutorialSidebar",previous:{title:"\u041a\u043e\u0441\u043c\u0438\u0447\u0435\u0441\u043a\u0430 \u0415\u043f\u043e\u043f\u0435\u044f",permalink:"/exercise/09-exceptions"},next:{title:"Regex \u0438 \u0424\u0430\u0439\u043b\u043e\u0432\u0435",permalink:"/exercise/11-files-regex"}},c={},o=[{value:"\u041c\u0443\u0437\u0438\u043a\u0430\u043b\u043d\u0438 \u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438",id:"\u043c\u0443\u0437\u0438\u043a\u0430\u043b\u043d\u0438-\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f-\u043d\u0430-\u043c\u0443\u0437\u0438\u043a\u0430\u043b\u043d\u0438-\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438-\u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",children:"\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u043c\u0443\u0437\u0438\u043a\u0430\u043b\u043d\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438 (\u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f)"}),"\n",(0,s.jsx)(n.h2,{id:"\u043c\u0443\u0437\u0438\u043a\u0430\u043b\u043d\u0438-\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438",children:"\u041c\u0443\u0437\u0438\u043a\u0430\u043b\u043d\u0438 \u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u0426\u0435\u043b:"})," \u0429\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438 \u043a\u043b\u0430\u0441\u043e\u0432\u0435, \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438 \u0438 \u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f (exceptions) \u0437\u0430 \u0434\u0430 \u0441\u044a\u0437\u0434\u0430\u0434\u0435\u043c \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430, \u043a\u043e\u044f\u0442\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0437\u0430 \u043c\u0443\u0437\u0438\u043a\u0430\u043b\u043d\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u0417\u0430\u0434\u0430\u0447\u0430:"})," \u0412\u0438\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u044a\u0437\u0434\u0430\u0434\u0435\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u043a\u043e\u044f\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u043d\u0430 \u043c\u0443\u0437\u0438\u043a\u0430\u043b\u0435\u043d \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0434\u0430 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u043c\u0443\u0437\u0438\u043a\u0430\u043b\u043d\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438. \u041d\u044f\u043a\u043e\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u0438\u0437\u043f\u044a\u043b\u043d\u0435\u043d\u0438 \u043d\u0430 \u0434\u0435\u043c\u043e, \u0434\u043e\u043a\u0430\u0442\u043e \u0434\u0440\u0443\u0433\u0438 \u043d\u0435. \u041f\u0440\u0438 \u043e\u043f\u0438\u0442 \u0437\u0430 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u043a\u043e\u0439\u0442\u043e \u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0438\u0437\u043f\u044a\u043b\u043d\u0435\u043d, \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0445\u0432\u044a\u0440\u043b\u044f \u0433\u0440\u0435\u0448\u043a\u0430."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'// Abstract class\n// \u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438\u044f\u0442 \u043a\u043b\u0430\u0441 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u0434\u0430 \u0441\u044a\u0437\u0434\u0430\u0434\u0435\u043c \u0431\u0430\u0437\u043e\u0432\u0430 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0437\u0430 \u043e\u0431\u0435\u043a\u0442\u0438\u0442\u0435.\n// \u0422\u043e\u0439 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u0440\u0430\u043d \u0434\u0438\u0440\u0435\u043a\u0442\u043d\u043e, \u043d\u043e \u043c\u043e\u0436\u0435 \u0434\u0430 \u0438\u043c\u0430 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0438 \u0438 \u043c\u0435\u0442\u043e\u0434\u0438, \u043a\u043e\u0438\u0442\u043e\n// \u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u0446\u0438\u0442\u0435 \u043c\u0443 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u0442 \u0438\u043b\u0438 \u0434\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0442 \u0442\u0430\u043a\u0430, \u043a\u0430\u043a\u0442\u043e \u0441\u0430 \u0434\u0435\u0444\u0438\u043d\u0438\u0440\u0430\u043d\u0438.\nabstract class MusicalInstrument {\n    private String name;\n    private String brand;\n    private double price;\n\n    // Constructor, getters, setters ...\n}\n\n// Interface\n// \u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438\u0442\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430\u0442 \u0434\u0430 \u0434\u0435\u0444\u0438\u043d\u0438\u0440\u0430\u043c\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435, \u043a\u043e\u0435\u0442\u043e \u043a\u043b\u0430\u0441\u043e\u0432\u0435\u0442\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u0442.\n// \u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044a\u0442 \u0437\u0430\u0434\u044a\u043b\u0436\u0430\u0432\u0430 \u043a\u043b\u0430\u0441\u043e\u0432\u0435\u0442\u0435, \u043a\u043e\u0438\u0442\u043e \u0433\u043e \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u0442, \u0434\u0430 \u0434\u0435\u0444\u0438\u043d\u0438\u0440\u0430\u0442 \u043c\u0435\u0442\u043e\u0434\u0438\u0442\u0435 \u043e\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430.\ninterface Playable {\n    void play();\n}\n\n// Classes\nclass Guitar extends MusicalInstrument implements Playable {\n    // \u041a\u043b\u0430\u0441\u044a\u0442 Guitar \u043d\u0430\u0441\u043b\u0435\u0434\u044f\u0432\u0430 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438\u044f \u043a\u043b\u0430\u0441 MusicalInstrument \u0438 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 Playable.\n    // \u0422\u043e\u0432\u0430 \u043e\u0437\u043d\u0430\u0447\u0430\u0432\u0430, \u0447\u0435 Guitar \u043f\u0440\u0438\u0442\u0435\u0436\u0430\u0432\u0430 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438\u0442\u0435 \u043d\u0430 MusicalInstrument \u0438 \u0435 \u0434\u043b\u044a\u0436\u0435\u043d \u0434\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\n    // \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043d\u0430 \u043c\u0435\u0442\u043e\u0434\u0430 play() \u043e\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 Playable.\n    @Override\n    public void play() {\n        System.out.println("Playing the guitar!");\n    }\n}\n\nclass Drum extends MusicalInstrument {\n    // Drum \u043d\u0430\u0441\u043b\u0435\u0434\u044f\u0432\u0430 \u0441\u0430\u043c\u043e \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438\u044f \u043a\u043b\u0430\u0441 \u0438 \u043d\u0435 \u043f\u0440\u0438\u0442\u0435\u0436\u0430\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 Playable \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430.\n}\n\nclass Piano extends MusicalInstrument implements Playable {\n    @Override\n    public void play() {\n        System.out.println("Playing the piano!");\n    }\n}\n\n// Custom Exception\n// \u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043d\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430\u0442 \u0434\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043c\u0435 \u0438 \u0445\u0432\u044a\u0440\u043b\u044f\u043c\u0435 \u0433\u0440\u0435\u0448\u043a\u0438, \u043a\u043e\u0438\u0442\u043e \u0441\u0430 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u0438 \u0437\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0438.\nclass NotPlayableException extends RuntimeException {\n    public NotPlayableException(String message) {\n        super(message);\n    }\n}\n\nclass MusicShop {\n    public void demoInstrument(MusicalInstrument instrument) {\n        // instanceof \u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0432 Java, \u043a\u043e\u0439\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0432\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430\u0434\u0435\u043d \u043e\u0431\u0435\u043a\u0442 \u0435 \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u044f \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u0435\u043d \u043a\u043b\u0430\u0441 \u0438\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441.\n        if(instrument instanceof Playable) {\n            // \u0422\u0443\u043a \u043a\u0430\u0441\u0442\u0432\u0430\u043c\u0435 \u043e\u0431\u0435\u043a\u0442\u0430 \u0434\u043e Playable, \u0437\u0430 \u0434\u0430 \u0438\u0437\u0432\u0438\u043a\u0430\u043c\u0435 \u043c\u0435\u0442\u043e\u0434\u0430 play().\n            ((Playable) instrument).play();\n        } else {\n            // \u0425\u0432\u044a\u0440\u043b\u044f\u043c\u0435 \u043d\u0430\u0448\u0435\u0442\u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u043e \u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435, \u0430\u043a\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044a\u0442 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0438\u0437\u043f\u044a\u043b\u043d\u0435\u043d \u043d\u0430 \u0434\u0435\u043c\u043e.\n            throw new NotPlayableException("This instrument can\'t be played for a demo!");\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String args[])\n    {\n        try {\n            // \u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043c\u0435 \u043d\u043e\u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043e\u0442 \u0442\u0438\u043f Guitar\n            Guitar g = new Guitar();\n\n            // \u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043c\u0435 \u043d\u043e\u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0437\u0430 \u043c\u0443\u0437\u0438\u043a\u0430\u043b\u043d\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438\n            MusicShop ms = new MusicShop();\n\n            // \u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0430\u043c\u0435 \u043a\u0430\u043a \u0437\u0432\u0443\u0447\u0438 \u043a\u0438\u0442\u0430\u0440\u0430\u0442\u0430\n            ms.demoInstrument(g);\n\n            // \u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043c\u0435 \u043d\u043e\u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043e\u0442 \u0442\u0438\u043f Drum\n            Drum d = new Drum();\n\n            // \u041e\u043f\u0438\u0442\u0432\u0430\u043c\u0435 \u0434\u0430 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0430\u043c\u0435 \u0431\u0430\u0440\u0430\u0431\u0430\u043d\u0430, \u043d\u043e \u0442\u043e\u0439 \u043d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430 Playable \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0437\u0430\u0442\u043e\u0432\u0430 \u0449\u0435 \u0431\u044a\u0434\u0435 \u0445\u0432\u044a\u0440\u043b\u0435\u043d\u0430 \u0433\u0440\u0435\u0448\u043a\u0430 NotPlayableException\n            ms.demoInstrument(d);\n        }\n        catch(NotPlayableException e)\n        {\n            // \u0418\u0437\u0432\u0435\u0436\u0434\u0430\u043c\u0435 \u0441\u044a\u043e\u0431\u0449\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430 \u0445\u0432\u044a\u0440\u043b\u0435\u043d\u043e\u0442\u043e \u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\n            System.out.println(e.getMessage());\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u041a\u043e\u0433\u0430\u0442\u043e \u0438\u0437\u043f\u044a\u043b\u043d\u0438\u0442\u0435 \u0433\u043b\u0430\u0432\u043d\u0430\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0432\u0438\u0434\u0438\u0442\u0435 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u0437\u0432\u0443\u043a\u0430 \u043d\u0430 \u043a\u0438\u0442\u0430\u0440\u0430\u0442\u0430 \u0438 \u0441\u043b\u0435\u0434 \u0442\u043e\u0432\u0430 \u0433\u0440\u0435\u0448\u043a\u0430, \u043a\u043e\u044f\u0442\u043e \u0443\u0432\u0435\u0434\u043e\u043c\u044f\u0432\u0430, \u0447\u0435 \u0431\u0430\u0440\u0430\u0431\u0430\u043d\u044a\u0442 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0438\u0437\u043f\u044a\u043b\u043d\u0435\u043d \u043d\u0430 \u0434\u0435\u043c\u043e. \ud83c\udfb5\ud83d\udeab"})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);