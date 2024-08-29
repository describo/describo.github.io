---
title: Cloud Services and Data Processing
aside: false
---

# Cloud Services and Data processing

::: tip INFO

Ensure you also read the page [Terms and Conditions](/terms-and-conditions.html#describo-cloud) to
find out how your data is handled by the Describo Cloud.

:::

If you register with describo.cloud, the capabilities you interact with are provided using Amazon
AWS. Specifically, the services used are:

-   <LinkComponent link="https://aws.amazon.com/textract/">AWS Textract</LinkComponent>
    -   The <LinkComponent link="https://aws.amazon.com/textract/faqs/">FAQs</LinkComponent> have a
        section titled **Data Privacy** that explains how your data is handled by that service.
-   <LinkComponent link="https://aws.amazon.com/comprehend/">AWS Comprehend</LinkComponent>
    -   The <LinkComponent link="https://aws.amazon.com/comprehend/faqs/">FAQs</LinkComponent> have
        a section titled **Data Privacy** that explains how your data is handled by that service.
-   <LinkComponent link="https://aws.amazon.com/bedrock/">AWS Bedrock</LinkComponent>.
    -   The <LinkComponent link="https://aws.amazon.com/bedrock/faqs/">FAQs</LinkComponent> have a
        section titled **Security** that explains how your data is handled by that service.

See those pages for how data is handled and their terms and conditions of use.

## AI services opt-out policies

**In the FAQs for Textract and Comprehend there is a section discussing how to opt out of _"having
your document and image inputs used to improve or develop the quality of Textract [and Comprehend]
and other Amazon machine-learning/artificial-intelligence technologies using an AWS Organizations
opt-out policy."_**

An opt out policy has been created and applied to the AWS Organisation that provides the Describo
Cloud.

<ImageComponent src="/images/opt-out-ai-policies.webp"></ImageComponent>

# Data Sovereignty

::: tip INFO

**Data Sovereignty in this context does not relate to the ownership of the data. It is the
responsibility of the user to ensure that they have permission from the data owner to work with the
data. This is especially true when it comes to Indigenous data.**

In this context, Data Sovereignty is used to indicate that data processing with Describo Cloud will
occur in a geographic region as close as possible to the location of the user and hopefully, with
the same or similar legal contexts.

:::

In order to support users across the globe, regional services have been provisioned in the Describo
Cloud. The AWS region you use `depends on the Geo location of your IP address` and it happens
automatically when you go to use a given capability.

## Users in Australia

When using the describo cloud services, your data will be processed in the `AWS Sydney` Region.

## Users in Europe

When using the describo cloud services, your data will be processed in the `AWS Frankfurt and Paris`
regions.

## Users in the United States and elsewhere

When using the describo cloud services, your data will be processed in the `AWS North Virginia`
region.
