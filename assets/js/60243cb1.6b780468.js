"use strict";(self.webpackChunkjava_lessons=self.webpackChunkjava_lessons||[]).push([[6241],{4501:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>b,contentTitle:()=>p,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var t=a(5893),r=a(1151),s=a(5162),i=a(4866);function l(e){const n={code:"code",h3:"h3",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"jdbc---\u0441\u0432\u044a\u0440\u0437\u0432\u0430\u043d\u0435-\u0441-\u0431\u0430\u0437\u0430-\u0434\u0430\u043d\u043d\u0438-\u0438-\u0438\u0437\u043f\u044a\u043b\u043d\u0435\u043d\u0438\u0435-\u043d\u0430-sql-\u0437\u0430\u044f\u0432\u043a\u0438",children:"JDBC - \u0421\u0432\u044a\u0440\u0437\u0432\u0430\u043d\u0435 \u0441 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u0438 \u0438 \u0438\u0437\u043f\u044a\u043b\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 SQL \u0437\u0430\u044f\u0432\u043a\u0438"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import java.sql.*;\n\npublic class JdbcExample {\n    public static void main(String[] args) {\n        String url = "jdbc:mysql://localhost:3306/myDatabase";\n        String username = "username";\n        String password = "password";\n\n        try (Connection connection = DriverManager.getConnection(url, username, password);\n             Statement statement = connection.createStatement()) {\n\n            // \u0418\u0437\u043f\u044a\u043b\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 SQL \u0437\u0430\u044f\u0432\u043a\u0430\n            ResultSet resultSet = statement.executeQuery("SELECT * FROM users");\n            while (resultSet.next()) {\n                System.out.println(resultSet.getString("name"));\n            }\n\n        } catch (SQLException e) {\n            e.printStackTrace();\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"jpa---\u0434\u0435\u0444\u0438\u043d\u0438\u0440\u0430\u043d\u0435-\u043d\u0430-\u0435\u043d\u0442\u0438\u0442\u0435\u0442\u0438-\u0438-\u0438\u0437\u0432\u044a\u0440\u0448\u0432\u0430\u043d\u0435-\u043d\u0430-\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",children:"JPA - \u0414\u0435\u0444\u0438\u043d\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0415\u043d\u0442\u0438\u0442\u0435\u0442\u0438 \u0438 \u0418\u0437\u0432\u044a\u0440\u0448\u0432\u0430\u043d\u0435 \u043d\u0430 \u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import javax.persistence.*;\n\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    private String name;\n\n    // \u0413\u0435\u0442\u044a\u0440\u0438 \u0438 \u0441\u0435\u0442\u044a\u0440\u0438\n}\n\npublic class JpaExample {\n    public static void main(String[] args) {\n        EntityManagerFactory emf = Persistence.createEntityManagerFactory("my-persistence-unit");\n        EntityManager em = emf.createEntityManager();\n\n        em.getTransaction().begin();\n        \n        User user = new User();\n        user.setName("\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432");\n        em.persist(user);\n\n        em.getTransaction().commit();\n        em.close();\n        emf.close();\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"hibernate---\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u0441\u0435\u0441\u0438\u0438-\u0438-\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438",children:"Hibernate - \u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0421\u0435\u0441\u0438\u0438 \u0438 \u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import org.hibernate.Session;\nimport org.hibernate.SessionFactory;\nimport org.hibernate.Transaction;\nimport org.hibernate.cfg.Configuration;\n\npublic class HibernateExample {\n    public static void main(String[] args) {\n        SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();\n        Session session = sessionFactory.openSession();\n\n        Transaction transaction = session.beginTransaction();\n\n        User user = new User();\n        user.setName("\u041c\u0430\u0440\u0438\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430");\n        session.save(user);\n\n        transaction.commit();\n        session.close();\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u043d\u0430\u043f\u0440\u0435\u0434\u043d\u0430\u043b\u0438-\u0437\u0430\u044f\u0432\u043a\u0438",children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u041d\u0430\u043f\u0440\u0435\u0434\u043d\u0430\u043b\u0438 \u0417\u0430\u044f\u0432\u043a\u0438"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import javax.persistence.criteria.CriteriaBuilder;\nimport javax.persistence.criteria.CriteriaQuery;\nimport javax.persistence.criteria.Root;\n\npublic class AdvancedQueryExample {\n    public static void main(String[] args) {\n        EntityManager em = ... // \u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 EntityManager\n\n        CriteriaBuilder cb = em.getCriteriaBuilder();\n        CriteriaQuery<User> query = cb.createQuery(User.class);\n        Root<User> user = query.from(User.class);\n        query.select(user).where(cb.equal(user.get("name"), "\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432"));\n\n        TypedQuery<User> typedQuery = em.createQuery(query);\n        List<User> result = typedQuery.getResultList();\n        result.forEach(u -> System.out.println(u.getName()));\n\n        em.close();\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043d\u0430-\u0438\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f-\u0438-\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u043e\u043d\u043d\u043e-\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",children:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043d\u0430 \u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0438 \u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u043e\u043d\u043d\u043e \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class TransactionManagementExample {\n    public static void main(String[] args) {\n        EntityManager em = ... // \u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 EntityManager\n\n        EntityTransaction transaction = null;\n        try {\n            transaction = em.getTransaction();\n            transaction.begin();\n\n            // \u0411\u0438\u0437\u043d\u0435\u0441 \u043b\u043e\u0433\u0438\u043a\u0430\n\n            transaction.commit();\n        } catch (Exception e) {\n            if (transaction != null) transaction.rollback();\n            e.printStackTrace();\n        } finally {\n            em.close();\n        }\n    }\n}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function o(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"java-\u0438-\u0431\u0430\u0437\u0438-\u0434\u0430\u043d\u043d\u0438",children:"Java \u0438 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438"}),"\n",(0,t.jsx)(n.p,{children:"Java \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438 \u0437\u0430 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438, \u043a\u043e\u0438\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430\u0442 \u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u0446\u0438\u0442\u0435 \u0434\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u0442 \u043c\u043e\u0449\u043d\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0438 \u0434\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0432\u0430\u0442 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u0442 \u0433\u043e\u043b\u0435\u043c\u0438 \u043e\u0431\u0435\u043c\u0438 \u0434\u0430\u043d\u043d\u0438."}),"\n",(0,t.jsx)(n.h3,{id:"jdbc-java-database-connectivity",children:"JDBC (Java Database Connectivity)"}),"\n",(0,t.jsx)(n.p,{children:"JDBC \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0435\u043d API \u0437\u0430 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0440\u0435\u043b\u0430\u0446\u0438\u043e\u043d\u043d\u0438 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438, \u043a\u0430\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u0438\u0437\u043f\u044a\u043b\u043d\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430 SQL \u0437\u0430\u044f\u0432\u043a\u0438 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430 \u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442\u0438\u0442\u0435."}),"\n",(0,t.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435-\u043d\u0430-\u0432\u0440\u044a\u0437\u043a\u0430-\u0441-\u0431\u0430\u0437\u0430-\u0434\u0430\u043d\u043d\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u0440: \u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u0412\u0440\u044a\u0437\u043a\u0430 \u0441 \u0411\u0430\u0437\u0430 \u0414\u0430\u043d\u043d\u0438"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class JdbcExample {\n    public static void main(String[] args) {\n        String url = "jdbc:mysql://localhost:3306/myDatabase";\n        String username = "username";\n        String password = "password";\n\n        try (Connection connection = DriverManager.getConnection(url, username, password)) {\n            System.out.println("\u0412\u0440\u044a\u0437\u043a\u0430\u0442\u0430 \u0441 \u0431\u0430\u0437\u0430\u0442\u0430 \u0434\u0430\u043d\u043d\u0438 \u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u0430!");\n        } catch (SQLException e) {\n            e.printStackTrace();\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"jpa-java-persistence-api-\u0438-hibernate",children:"JPA (Java Persistence API) \u0438 Hibernate"}),"\n",(0,t.jsx)(n.p,{children:"JPA \u0438 Hibernate \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0437\u0430 ORM (Object-Relational Mapping), \u043a\u043e\u0438\u0442\u043e \u0443\u043b\u0435\u0441\u043d\u044f\u0432\u0430\u0442 \u043c\u0430\u043f\u0438\u0440\u0430\u043d\u0435\u0442\u043e \u043d\u0430 Java \u043e\u0431\u0435\u043a\u0442\u0438 \u043a\u044a\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0438 \u0432 \u0431\u0430\u0437\u0430\u0442\u0430 \u0434\u0430\u043d\u043d\u0438."}),"\n",(0,t.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0434\u0435\u0444\u0438\u043d\u0438\u0440\u0430\u043d\u0435-\u043d\u0430-\u0435\u043d\u0442\u0438\u0442\u0435\u0442",children:"\u041f\u0440\u0438\u043c\u0435\u0440: \u0414\u0435\u0444\u0438\u043d\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0415\u043d\u0442\u0438\u0442\u0435\u0442"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"import javax.persistence.Entity;\nimport javax.persistence.Id;\n\n@Entity\npublic class User {\n    @Id\n    private Long id;\n    private String name;\n\n    // \u0413\u0435\u0442\u044a\u0440\u0438 \u0438 \u0441\u0435\u0442\u044a\u0440\u0438\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u0434\u0430\u043d\u043d\u0438",children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0434\u0430\u043d\u043d\u0438"}),"\n",(0,t.jsx)(n.p,{children:"Java \u0438 \u0431\u0430\u0437\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u0438 \u0432 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430\u0442 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u043c\u043e\u0449\u043d\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u0438, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u043d\u043e \u0443\u0435\u0431 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0438 \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u043d\u0438\u0435\u0442\u043e."}),"\n",(0,t.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0437\u0432\u043b\u0438\u0447\u0430\u043d\u0435-\u043d\u0430-\u0434\u0430\u043d\u043d\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u0440: \u0418\u0437\u0432\u043b\u0438\u0447\u0430\u043d\u0435 \u043d\u0430 \u0414\u0430\u043d\u043d\u0438"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import java.sql.Connection;\nimport java.sql.ResultSet;\nimport java.sql.SQLException;\nimport java.sql.Statement;\n\npublic class DataRetrievalExample {\n    public static void main(String[] args) {\n        // \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430 \u0441\u0435, \u0447\u0435 \u0432\u0440\u044a\u0437\u043a\u0430\u0442\u0430 \u0435 \u0441\u044a\u0437\u0434\u0430\u0434\u0435\u043d\u0430 (\u043a\u0430\u043a\u0442\u043e \u0432 JDBC \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u043f\u043e-\u0433\u043e\u0440\u0435)\n\n        try (Statement statement = connection.createStatement()) {\n            ResultSet resultSet = statement.executeQuery("SELECT * FROM users");\n            while (resultSet.next()) {\n                System.out.println("\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b: " + resultSet.getString("name"));\n            }\n        } catch (SQLException e) {\n            e.printStackTrace();\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u0422\u043e\u0437\u0438 \u0443\u0440\u043e\u043a \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044f \u043a\u0430\u043a Java \u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0430 \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u0432\u0438\u0434\u043e\u0432\u0435 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438 \u0438 \u043a\u0430\u043a \u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u0437\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u0438. \u0412 \u0441\u043b\u0435\u0434\u0432\u0430\u0449\u0438\u0442\u0435 \u043b\u0435\u043a\u0446\u0438\u0438 \u0449\u0435 \u0440\u0430\u0437\u0433\u043b\u0435\u0434\u0430\u043c\u0435 \u0434\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u0438 \u0430\u0441\u043f\u0435\u043a\u0442\u0438 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u0430 \u0441 \u0434\u0430\u043d\u043d\u0438 \u0432 Java, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u043d\u043e \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0435\u0441\u0438\u0438 \u0438 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0435 \u043d\u0430 JPA \u0438 Hibernate \u0437\u0430 \u043f\u043e-\u0441\u043b\u043e\u0436\u043d\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 \u043f\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u0438."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}const d={id:"17-jdbc-hibernate",slug:"/lectures/17-jdbc-hibernate",title:"Java \u0438 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438 - \u041e\u0442 JDBC \u0434\u043e Hibernate",description:"\u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043a\u0430\u043a Java \u0441\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0430 \u0441 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438, \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u043a\u0438 JDBC, JPA \u0438 Hibernate, \u0437\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043c\u043e\u0449\u043d\u0438 \u0438 \u0433\u044a\u0432\u043a\u0430\u0432\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0432\u0430\u0449\u0438 \u0433\u043e\u043b\u0435\u043c\u0438 \u043e\u0431\u0435\u043c\u0438 \u0434\u0430\u043d\u043d\u0438.",sidebar_label:"Java \u0438 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438",sidebar_class_name:"standard",sidebar_position:17,image:"/images/lectures.jpg",tags:["\u043b\u0435\u043a\u0446\u0438\u0438","java","\u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438","jdbc","jpa","hibernate","orm"],keywords:["Java","\u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438","JDBC","JPA","Hibernate","ORM","SQL"],hide_title:!1,hide_table_of_contents:!0,draft:!1,unlisted:!1},p=void 0,m={id:"generated/17-jdbc-hibernate",title:"Java \u0438 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438 - \u041e\u0442 JDBC \u0434\u043e Hibernate",description:"\u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043a\u0430\u043a Java \u0441\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0430 \u0441 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438, \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u043a\u0438 JDBC, JPA \u0438 Hibernate, \u0437\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043c\u043e\u0449\u043d\u0438 \u0438 \u0433\u044a\u0432\u043a\u0430\u0432\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0432\u0430\u0449\u0438 \u0433\u043e\u043b\u0435\u043c\u0438 \u043e\u0431\u0435\u043c\u0438 \u0434\u0430\u043d\u043d\u0438.",source:"@site/docs/generated/17-jdbc-hibernate.mdx",sourceDirName:"generated",slug:"/lectures/17-jdbc-hibernate",permalink:"/lectures/17-jdbc-hibernate",draft:!1,unlisted:!1,tags:[{label:"\u043b\u0435\u043a\u0446\u0438\u0438",permalink:"/tags/\u043b\u0435\u043a\u0446\u0438\u0438"},{label:"java",permalink:"/tags/java"},{label:"\u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438",permalink:"/tags/\u0431\u0430\u0437\u0438-\u0434\u0430\u043d\u043d\u0438"},{label:"jdbc",permalink:"/tags/jdbc"},{label:"jpa",permalink:"/tags/jpa"},{label:"hibernate",permalink:"/tags/hibernate"},{label:"orm",permalink:"/tags/orm"}],version:"current",sidebarPosition:17,frontMatter:{id:"17-jdbc-hibernate",slug:"/lectures/17-jdbc-hibernate",title:"Java \u0438 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438 - \u041e\u0442 JDBC \u0434\u043e Hibernate",description:"\u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043a\u0430\u043a Java \u0441\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0430 \u0441 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438, \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u043a\u0438 JDBC, JPA \u0438 Hibernate, \u0437\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043c\u043e\u0449\u043d\u0438 \u0438 \u0433\u044a\u0432\u043a\u0430\u0432\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0432\u0430\u0449\u0438 \u0433\u043e\u043b\u0435\u043c\u0438 \u043e\u0431\u0435\u043c\u0438 \u0434\u0430\u043d\u043d\u0438.",sidebar_label:"Java \u0438 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438",sidebar_class_name:"standard",sidebar_position:17,image:"/images/lectures.jpg",tags:["\u043b\u0435\u043a\u0446\u0438\u0438","java","\u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438","jdbc","jpa","hibernate","orm"],keywords:["Java","\u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438","JDBC","JPA","Hibernate","ORM","SQL"],hide_title:!1,hide_table_of_contents:!0,draft:!1,unlisted:!1},sidebar:"tutorialSidebar",previous:{title:"Java Reflection API",permalink:"/lectures/16-reflection"},next:{title:"\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f",permalink:"/exercises"}},b={},h=[];function g(e){return(0,t.jsxs)(i.Z,{defaultValue:"theory",values:[{label:"\u0422\u0435\u043e\u0440\u0438\u044f",value:"theory"},{label:"\u041a\u043e\u0434",value:"code"}],children:[(0,t.jsx)(s.Z,{value:"theory",children:(0,t.jsx)(u,{})}),(0,t.jsx)(s.Z,{value:"code",children:(0,t.jsx)(c,{})})]})}function v(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g()}},5162:(e,n,a)=>{a.d(n,{Z:()=>i});a(7294);var t=a(6010);const r={tabItem:"tabItem_Ymn6"};var s=a(5893);function i(e){let{children:n,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>S});var t=a(7294),r=a(6010),s=a(2466),i=a(6550),l=a(469),c=a(1980),o=a(7392),u=a(12);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=p(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,d]=b({queryString:a,groupId:r}),[h,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),v=(()=>{const e=o??h;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(5893);function f(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),u=e=>{const n=e.currentTarget,a=c.indexOf(n),r=l[a].value;r!==t&&(o(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=h(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(x,{...e,...n})]})}function S(e){const n=(0,g.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>i});var t=a(7294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);