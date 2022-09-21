import { gql } from "@apollo/client";

export const ME = gql`
    query {
        me {
            email
            username
            imgUrl
            profile {
                expectedSalary
                biography
                firstName
                lastName
                levelOfStudy
                linkedInUrl
                phoneNumber
                portfolio
                repoUrl
                wilaya
            }
        }
    }
`