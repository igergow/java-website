"use strict";(self.webpackChunkjava_lessons=self.webpackChunkjava_lessons||[]).push([[3410],{7361:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>x,contentTitle:()=>h,default:()=>m,frontMatter:()=>u,metadata:()=>g,toc:()=>j});var t=r(5893),s=r(1151),i=r(5162),l=r(4866);function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u0441\u0438\u043c\u0432\u043e\u043b\u043d\u0438-\u043d\u0438\u0437\u043e\u0432\u0435-strings",children:"\u0421\u0418\u041c\u0412\u041e\u041b\u041d\u0418 \u041d\u0418\u0417\u041e\u0412\u0415 (Strings)"}),"\n",(0,t.jsxs)(n.p,{children:["\u0412 Java, \u0441\u0438\u043c\u0432\u043e\u043b\u043d\u0438\u0442\u0435 \u043d\u0438\u0437\u043e\u0432\u0435 \u0441\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0435\u043d\u0438 \u0447\u0440\u0435\u0437 ",(0,t.jsx)(n.code,{children:"String"})," \u043a\u043b\u0430\u0441\u0430. \u0422\u0435 \u0441\u0430 \u0438\u043c\u0443\u0442\u0430\u0431\u0438\u043b\u043d\u0438, \u043a\u043e\u0435\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0432\u0430, \u0447\u0435 \u043d\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u043f\u0440\u043e\u043c\u0435\u043d\u0435\u043d\u0438 \u0441\u043b\u0435\u0434 \u043a\u0430\u0442\u043e \u0441\u0430 \u0441\u044a\u0437\u0434\u0430\u0434\u0435\u043d\u0438."]}),"\n",(0,t.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public class StringsDemo {\n\n    public static void main(String[] args) {\n        // \u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 Strings\n        String \u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043dString = "\u041f\u0440\u0438\u043c\u0435\u0440\u0435\u043d \u0442\u0435\u043a\u0441\u0442";\n        String \u0434\u0440\u0443\u0433\u041f\u0440\u0438\u043c\u0435\u0440\u0435\u043dString = new String("\u0414\u0440\u0443\u0433 \u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043d \u0442\u0435\u043a\u0441\u0442");\n\n        // \u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 Strings\n        System.out.println("\u0414\u044a\u043b\u0436\u0438\u043d\u0430: " + \u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043dString.length()); // \u0414\u044a\u043b\u0436\u0438\u043d\u0430 \u043d\u0430 String\n        System.out.println("\u0421\u0440\u0430\u0432\u043d\u044f\u0432\u0430\u043d\u0435: " + \u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043dString.equals(\u0434\u0440\u0443\u0433\u041f\u0440\u0438\u043c\u0435\u0440\u0435\u043dString)); // \u0421\u0440\u0430\u0432\u043d\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 Strings\n\n        // \u041f\u043e\u0434\u0441\u0442\u0440\u0438\u043d\u0433 \u0438 \u0441\u043f\u043b\u0438\u0442\u0432\u0430\u043d\u0435\n        System.out.println("\u041f\u043e\u0434\u0441\u0442\u0440\u0438\u043d\u0433: " + \u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043dString.substring(0, 7)); // \u0412\u0437\u0435\u043c\u0430\u043d\u0435 \u043d\u0430 \u043f\u043e\u0434\u0441\u0442\u0440\u0438\u043d\u0433\n        String[] \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438Strings = \u0434\u0440\u0443\u0433\u041f\u0440\u0438\u043c\u0435\u0440\u0435\u043dString.split(" "); // \u0421\u043f\u043b\u0438\u0442\u0432\u0430\u043d\u0435 \u043d\u0430 String\n        for (String \u0447\u0430\u0441\u0442 : \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438Strings) {\n            System.out.println("\u0427\u0430\u0441\u0442: " + \u0447\u0430\u0441\u0442);\n        }\n\n        // \u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430\u043d\u0435 \u0438 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 Strings\n        String \u0447\u0438\u0441\u043b\u043eStr = "100";\n        int \u0447\u0438\u0441\u043b\u043e = Integer.parseInt(\u0447\u0438\u0441\u043b\u043eStr); // \u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 String \u0432 \u0447\u0438\u0441\u043b\u043e\n        System.out.println("\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0430\u043d\u0435: " + String.format("\u0421\u0442\u043e\u0439\u043d\u043e\u0441\u0442: %d", \u0447\u0438\u0441\u043b\u043e)); // \u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 String\n\n        // StringBuilder \u043f\u0440\u0438\u043c\u0435\u0440\u0438\n        StringBuilder sb = new StringBuilder("Java");\n        sb.append(" \u0438 Strings"); // \u0414\u043e\u0431\u0430\u0432\u044f\u043d\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442\n        System.out.println("StringBuilder: " + sb.toString());\n    }\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function o(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441\u044a\u0441-strings-\u0432-java",children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441\u044a\u0441 Strings \u0432 Java"}),"\n",(0,t.jsx)(n.p,{children:"Strings \u0432 Java \u0441\u0430 \u043e\u0441\u043d\u043e\u0432\u0435\u043d \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438\u0440\u0430\u043d\u0435\u0442\u043e, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044f\u0449\u0438 \u043f\u043e\u0440\u0435\u0434\u0438\u0446\u0438 \u043e\u0442 \u0441\u0438\u043c\u0432\u043e\u043b\u0438. \u0412\u0430\u0436\u043d\u043e \u0435 \u0434\u0430 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043c\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438\u0442\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 \u043c\u0435\u0442\u043e\u0434\u0438, \u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u0441 \u0442\u044f\u0445."}),"\n",(0,t.jsx)(n.h3,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u0438-\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438-\u0441\u044a\u0441-strings",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u044a\u0441 Strings:"}),"\n",(0,t.jsx)(n.h4,{id:"\u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435-\u0438-\u043e\u0441\u043d\u043e\u0432\u043d\u0438-\u043c\u0435\u0442\u043e\u0434\u0438",children:"\u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u0438 \u043c\u0435\u0442\u043e\u0434\u0438:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 String"}),": \u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u0447\u0440\u0435\u0437 \u0434\u0438\u0440\u0435\u043a\u0442\u043d\u0438 \u043b\u0438\u0442\u0435\u0440\u0430\u043b\u0438 \u0438\u043b\u0438 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0430 \u043d\u0430 ",(0,t.jsx)(n.code,{children:"String"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0414\u044a\u043b\u0436\u0438\u043d\u0430 \u043d\u0430 String"}),": ",(0,t.jsx)(n.code,{children:".length()"})," \u0432\u0440\u044a\u0449\u0430 \u0431\u0440\u043e\u044f \u0441\u0438\u043c\u0432\u043e\u043b\u0438."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0421\u0440\u0430\u0432\u043d\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 Strings"}),": ",(0,t.jsx)(n.code,{children:".equals()"}),", ",(0,t.jsx)(n.code,{children:".equalsIgnoreCase()"}),", \u0438 ",(0,t.jsx)(n.code,{children:"compareTo()"})," \u0437\u0430 \u0441\u0440\u0430\u0432\u043d\u044f\u0432\u0430\u043d\u0435."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u043e\u0434\u0441\u0442\u0440\u0438\u043d\u0433\u043e\u0432\u0435"}),": ",(0,t.jsx)(n.code,{children:".substring()"})," \u0437\u0430 \u0438\u0437\u0432\u043b\u0438\u0447\u0430\u043d\u0435 \u043d\u0430 \u0447\u0430\u0441\u0442 \u043e\u0442 string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0421\u043f\u043b\u0438\u0442\u0432\u0430\u043d\u0435 \u043d\u0430 Strings"}),": ",(0,t.jsx)(n.code,{children:".split()"})," \u0440\u0430\u0437\u0434\u0435\u043b\u044f string \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u0442\u0430 \u043d\u0430 \u0437\u0430\u0434\u0430\u0434\u0435\u043d \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430-\u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435-\u0438-\u0441\u0440\u0430\u0432\u043d\u044f\u0432\u0430\u043d\u0435",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u0438 \u0441\u0440\u0430\u0432\u043d\u044f\u0432\u0430\u043d\u0435:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'String \u043f\u044a\u0440\u0432\u0438\u0422\u0435\u043a\u0441\u0442 = "Hello";\nString \u0432\u0442\u043e\u0440\u0438\u0422\u0435\u043a\u0441\u0442 = new String("hello");\n\nSystem.out.println(\u043f\u044a\u0440\u0432\u0438\u0422\u0435\u043a\u0441\u0442.length()); // \u0412\u0440\u044a\u0449\u0430 5\nSystem.out.println(\u043f\u044a\u0440\u0432\u0438\u0422\u0435\u043a\u0441\u0442.equals(\u0432\u0442\u043e\u0440\u0438\u0422\u0435\u043a\u0441\u0442)); // false\nSystem.out.println(\u043f\u044a\u0440\u0432\u0438\u0422\u0435\u043a\u0441\u0442.equalsIgnoreCase(\u0432\u0442\u043e\u0440\u0438\u0422\u0435\u043a\u0441\u0442)); // true\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430\u043d\u0435-\u0438-\u043c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u0430\u043d\u0435-\u043d\u0430-strings",children:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430\u043d\u0435 \u0438 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 Strings:"}),"\n",(0,t.jsx)(n.h4,{id:"\u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430\u043d\u0435-\u043d\u0430-\u0434\u0430\u043d\u043d\u0438",children:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430\u043d\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u0438:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430\u043d\u0435 \u043d\u0430 Strings \u0432 \u0447\u0438\u0441\u043b\u0430"}),": \u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0435 \u043d\u0430 ",(0,t.jsx)(n.code,{children:"Integer.parseInt()"}),", ",(0,t.jsx)(n.code,{children:"Double.parseDouble()"})," \u0438 \u0434\u0440. \u0437\u0430 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 strings \u0432 \u0447\u0438\u0441\u043b\u043e\u0432\u0438 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0438."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 Strings"}),": ",(0,t.jsx)(n.code,{children:"String.format()"})," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 strings \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d \u0448\u0430\u0431\u043b\u043e\u043d."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"\u043c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u0430\u043d\u0435-\u043d\u0430-strings",children:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 Strings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0430\u0446\u0438\u044f \u043d\u0430 Strings"}),": \u0421\u044a\u0435\u0434\u0438\u043d\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 strings \u0447\u0440\u0435\u0437 ",(0,t.jsx)(n.code,{children:"+"})," \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0438\u043b\u0438 \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,t.jsx)(n.code,{children:".concat()"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0417\u0430\u043c\u044f\u043d\u0430 \u043d\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u0438"}),": ",(0,t.jsx)(n.code,{children:".replace()"})," \u0437\u0430\u043c\u0435\u043d\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u0438 \u0438\u043b\u0438 \u043f\u043e\u0434\u0441\u0442\u0440\u0438\u043d\u0433\u043e\u0432\u0435."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0435\u0432\u0440\u044a\u0449\u0430\u043d\u0435 \u043d\u0430 \u0431\u0443\u043a\u0432\u0438 \u0432 \u0433\u043b\u0430\u0432\u043d\u0438/\u043c\u0430\u043b\u043a\u0438"}),": ",(0,t.jsx)(n.code,{children:".toUpperCase()"})," \u0438 ",(0,t.jsx)(n.code,{children:".toLowerCase()"})," \u0437\u0430 \u043f\u0440\u043e\u043c\u044f\u043d\u0430 \u043d\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u044a\u0440\u0430."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438-\u0437\u0430-\u043c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u0430\u043d\u0435",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438 \u0437\u0430 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u0430\u043d\u0435:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'String \u0431\u0430\u0437\u043e\u0432\u0422\u0435\u043a\u0441\u0442 = "Java Programming";\nString \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u0422\u0435\u043a\u0441\u0442 = \u0431\u0430\u0437\u043e\u0432\u0422\u0435\u043a\u0441\u0442.replace("Java", "C++");\nSystem.out.println(\u0437\u0430\u043c\u0435\u043d\u0435\u043d\u0422\u0435\u043a\u0441\u0442); // "C++ Programming"\n\nString \u043c\u0430\u043b\u043a\u0438\u0411\u0443\u043a\u0432\u0438 = \u0431\u0430\u0437\u043e\u0432\u0422\u0435\u043a\u0441\u0442.toLowerCase();\nSystem.out.println(\u043c\u0430\u043b\u043a\u0438\u0411\u0443\u043a\u0432\u0438); // "java programming"\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-stringbuilder-\u0438-stringbuffer",children:["\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 ",(0,t.jsx)(n.code,{children:"StringBuilder"})," \u0438 ",(0,t.jsx)(n.code,{children:"StringBuffer"}),":"]}),"\n",(0,t.jsx)(n.h4,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u0438-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435"}),": \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043d\u0430 ",(0,t.jsx)(n.code,{children:"StringBuilder"})," \u0438\u043b\u0438 ",(0,t.jsx)(n.code,{children:"StringBuffer"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0414\u043e\u0431\u0430\u0432\u044f\u043d\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442"}),": ",(0,t.jsx)(n.code,{children:".append()"})," \u0434\u043e\u0431\u0430\u0432\u044f \u0442\u0435\u043a\u0441\u0442 \u043a\u044a\u043c \u043a\u0440\u0430\u044f."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041e\u0431\u0440\u044a\u0449\u0430\u043d\u0435 \u043d\u0430 Strings"}),": ",(0,t.jsx)(n.code,{children:".reverse()"})," \u043e\u0431\u0440\u044a\u0449\u0430 \u0440\u0435\u0434\u0430 \u043d\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0442\u0435."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0412\u043c\u044a\u043a\u0432\u0430\u043d\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442"}),": ",(0,t.jsx)(n.code,{children:".insert()"})," \u0432\u043c\u044a\u043a\u0432\u0430 \u0442\u0435\u043a\u0441\u0442 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u044f."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043d\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442"}),": ",(0,t.jsx)(n.code,{children:".delete()"})," \u0438\u0437\u0442\u0440\u0438\u0432\u0430 \u0442\u0435\u043a\u0441\u0442 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u044f."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430\u043d\u0435 \u0432 String"}),": ",(0,t.jsx)(n.code,{children:".toString()"})," \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430 ",(0,t.jsx)(n.code,{children:"StringBuilder"})," \u0432 ",(0,t.jsx)(n.code,{children:"String"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438-\u0437\u0430-\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-stringbuilder",children:["\u041f\u0440\u0438\u043c\u0435\u0440\u0438 \u0437\u0430 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 ",(0,t.jsx)(n.code,{children:"StringBuilder"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'StringBuilder \u043d\u043e\u0432\u0422\u0435\u043a\u0441\u0442 = new StringBuilder("Java");\n\u043d\u043e\u0432\u0422\u0435\u043a\u0441\u0442.append(" Programming");\nSystem.out.println(\u043d\u043e\u0432\u0422\u0435\u043a\u0441\u0442.toString()); // \u0418\u0437\u0432\u0435\u0436\u0434\u0430 "Java Programming"\n\n\u043d\u043e\u0432\u0422\u0435\u043a\u0441\u0442.reverse();\nSystem.out.println(\u043d\u043e\u0432\u0422\u0435\u043a\u0441\u0442.toString()); // \u0418\u0437\u0432\u0435\u0436\u0434\u0430 "gnimmargorP avaJ"\n\n\u043d\u043e\u0432\u0422\u0435\u043a\u0441\u0442.insert(0, "Learn ");\nSystem.out.println(\u043d\u043e\u0432\u0422\u0435\u043a\u0441\u0442.toString()); // \u0418\u0437\u0432\u0435\u0436\u0434\u0430 "Learn gnimmargorP avaJ"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043e\u0441\u0442\u0438:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"StringBuilder"}),": \u041f\u043e-\u0431\u044a\u0440\u0437 \u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449 \u0437\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438, \u043a\u043e\u0438\u0442\u043e \u043d\u0435 \u0438\u0437\u0438\u0441\u043a\u0432\u0430\u0442 thread-safety."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"StringBuffer"}),": Thread-safe, \u043d\u043e \u043f\u043e-\u0431\u0430\u0432\u0435\u043d \u043f\u043e\u0440\u0430\u0434\u0438 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f\u0442\u0430 \u043d\u0430 \u043c\u0435\u0442\u043e\u0434\u0438\u0442\u0435."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0438-string-\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0438 String \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0438 \u0438\u0437\u0440\u0430\u0437\u0438"}),": \u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0435 \u043d\u0430 ",(0,t.jsx)(n.code,{children:".matches()"}),", ",(0,t.jsx)(n.code,{children:".replaceAll()"}),", \u0438 ",(0,t.jsx)(n.code,{children:".split()"})," \u0441 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0438 \u0438\u0437\u0440\u0430\u0437\u0438 \u0437\u0430 \u0441\u043b\u043e\u0436\u043d\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u043d\u0438\u0435"}),": ",(0,t.jsx)(n.code,{children:".startsWith()"}),", ",(0,t.jsx)(n.code,{children:".endsWith()"}),", \u0438 ",(0,t.jsx)(n.code,{children:".contains()"})," \u0437\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u0438 \u0438\u043b\u0438 \u043f\u043e\u0434\u0441\u0442\u0440\u0438\u043d\u0433\u043e\u0432\u0435."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0422\u0440\u0438\u043c\u0432\u0430\u043d\u0435 \u043d\u0430 Strings"}),": ",(0,t.jsx)(n.code,{children:".trim()"})," \u043f\u0440\u0435\u043c\u0430\u0445\u0432\u0430 \u043d\u0430\u0447\u0430\u043b\u043d\u0438 \u0438 \u043a\u0440\u0430\u0439\u043d\u0438 \u043f\u0440\u0430\u0437\u043d\u0438 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441-\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0438-\u0438\u0437\u0440\u0430\u0437\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0438 \u0438\u0437\u0440\u0430\u0437\u0438:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'String \u0442\u0435\u043a\u0441\u0442 = "Java123";\nboolean \u0441\u044a\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435 = \u0442\u0435\u043a\u0441\u0442.matches("Java[0-9]+");\nSystem.out.println(\u0441\u044a\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435); // true\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435:"}),"\n",(0,t.jsxs)(n.p,{children:["\u041f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438\u0442\u0435 \u043c\u0435\u0442\u043e\u0434\u0438 \u0437\u0430 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 strings \u0432 Java \u0435 \u043e\u0442 \u0441\u044a\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0437\u0430 \u0432\u0441\u044f\u043a\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0430. \u041e\u0442 \u043f\u0440\u043e\u0441\u0442\u0438\u0442\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043a\u0430\u0442\u043e \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u0438 \u0441\u0440\u0430\u0432\u043d\u044f\u0432\u0430\u043d\u0435 \u0434\u043e \u0441\u043b\u043e\u0436\u043d\u0438 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u0430\u0446\u0438\u0438 \u0441 ",(0,t.jsx)(n.code,{children:"StringBuilder"})," \u0438 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0438 \u0438\u0437\u0440\u0430\u0437\u0438, strings \u0438\u0433\u0440\u0430\u044f\u0442 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u043d\u0430 \u0440\u043e\u043b\u044f \u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438\u0440\u0430\u043d\u0435\u0442\u043e \u043d\u0430 Java."]}),"\n",(0,t.jsx)(n.p,{children:"\u0422\u043e\u0437\u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043e\u0431\u0445\u0432\u0430\u0449\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u0438\u0442\u0435 \u0430\u0441\u043f\u0435\u043a\u0442\u0438 \u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430, \u043d\u043e \u0435 \u0432\u0430\u0436\u043d\u043e \u0434\u0430 \u0441\u0435 \u043f\u0440\u043e\u0434\u044a\u043b\u0436\u0438 \u0441 \u0438\u0437\u0443\u0447\u0430\u0432\u0430\u043d\u0435\u0442\u043e \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0442\u0435\u043c\u0430\u0442\u0430 \u0437\u0430 \u043f\u043e-\u0434\u044a\u043b\u0431\u043e\u043a\u043e \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}const u={id:"06-strings",slug:"/lectures/06-strings",title:"Strings - \u0418\u0437\u043a\u0443\u0441\u0442\u0432\u043e\u0442\u043e \u043d\u0430 \u0422\u0435\u043a\u0441\u0442\u0430",description:"\u0420\u0430\u0437\u0448\u0438\u0440\u0435\u0442\u0435 \u0437\u043d\u0430\u043d\u0438\u044f\u0442\u0430 \u0441\u0438 \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u043d\u0438 \u043d\u0438\u0437\u043e\u0432\u0435 \u0432 \u041e\u041e\u041f \u0441 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u0438.",sidebar_label:"Strings",sidebar_class_name:"standard",sidebar_position:6,image:"/images/lectures.jpg",tags:["\u043b\u0435\u043a\u0446\u0438\u0438","\u0441\u0442\u0440\u0438\u043d\u0433\u043e\u0432\u0435"],keywords:["Strings","\u0422\u0435\u043a\u0441\u0442","\u041e\u041e\u041f"],hide_title:!1,hide_table_of_contents:!0,draft:!1,unlisted:!1},h=void 0,g={id:"generated/06-strings",title:"Strings - \u0418\u0437\u043a\u0443\u0441\u0442\u0432\u043e\u0442\u043e \u043d\u0430 \u0422\u0435\u043a\u0441\u0442\u0430",description:"\u0420\u0430\u0437\u0448\u0438\u0440\u0435\u0442\u0435 \u0437\u043d\u0430\u043d\u0438\u044f\u0442\u0430 \u0441\u0438 \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u043d\u0438 \u043d\u0438\u0437\u043e\u0432\u0435 \u0432 \u041e\u041e\u041f \u0441 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u0438.",source:"@site/docs/generated/06-strings.mdx",sourceDirName:"generated",slug:"/lectures/06-strings",permalink:"/lectures/06-strings",draft:!1,unlisted:!1,tags:[{label:"\u043b\u0435\u043a\u0446\u0438\u0438",permalink:"/tags/\u043b\u0435\u043a\u0446\u0438\u0438"},{label:"\u0441\u0442\u0440\u0438\u043d\u0433\u043e\u0432\u0435",permalink:"/tags/\u0441\u0442\u0440\u0438\u043d\u0433\u043e\u0432\u0435"}],version:"current",sidebarPosition:6,frontMatter:{id:"06-strings",slug:"/lectures/06-strings",title:"Strings - \u0418\u0437\u043a\u0443\u0441\u0442\u0432\u043e\u0442\u043e \u043d\u0430 \u0422\u0435\u043a\u0441\u0442\u0430",description:"\u0420\u0430\u0437\u0448\u0438\u0440\u0435\u0442\u0435 \u0437\u043d\u0430\u043d\u0438\u044f\u0442\u0430 \u0441\u0438 \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u043d\u0438 \u043d\u0438\u0437\u043e\u0432\u0435 \u0432 \u041e\u041e\u041f \u0441 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u0438.",sidebar_label:"Strings",sidebar_class_name:"standard",sidebar_position:6,image:"/images/lectures.jpg",tags:["\u043b\u0435\u043a\u0446\u0438\u0438","\u0441\u0442\u0440\u0438\u043d\u0433\u043e\u0432\u0435"],keywords:["Strings","\u0422\u0435\u043a\u0441\u0442","\u041e\u041e\u041f"],hide_title:!1,hide_table_of_contents:!0,draft:!1,unlisted:!1},sidebar:"tutorialSidebar",previous:{title:"\u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",permalink:"/lectures/05-exceptions"},next:{title:"Regex",permalink:"/lectures/07-regex"}},x={},j=[];function p(e){return(0,t.jsxs)(l.Z,{defaultValue:"theory",values:[{label:"\u0422\u0435\u043e\u0440\u0438\u044f",value:"theory"},{label:"\u041a\u043e\u0434",value:"code"}],children:[(0,t.jsx)(i.Z,{value:"theory",children:(0,t.jsx)(d,{})}),(0,t.jsx)(i.Z,{value:"code",children:(0,t.jsx)(c,{})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p()}},5162:(e,n,r)=>{r.d(n,{Z:()=>l});r(7294);var t=r(6010);const s={tabItem:"tabItem_Ymn6"};var i=r(5893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,l),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>y});var t=r(7294),s=r(6010),i=r(2466),l=r(6550),a=r(469),c=r(1980),o=r(7392),d=r(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=h(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[o,u]=x({queryString:r,groupId:s}),[j,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),m=(()=>{const e=o??j;return g({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var p=r(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var S=r(5893);function f(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),s=a[r].value;s!==t&&(o(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,S.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,S.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,S.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=j(e);return(0,S.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,S.jsx)(f,{...e,...n}),(0,S.jsx)(b,{...e,...n})]})}function y(e){const n=(0,p.Z)();return(0,S.jsx)(v,{...e,children:u(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var t=r(7294);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);