---
title: How is data handled inside Describo
aside: false
---

# How is data handled inside Describo?

Author: Marco La Rosa, 24/7/2024

::: tip Summary

Describo handles your data with the utmost respect for privacy and ownership. Describo ensures that
data remains your property and is not used for any purpose other than what **you** explicitly
specify. When using the Describo application locally, your data does not leave your computer, and
any metadata created is stored in the source folder. For users of the Describo Cloud services, your
data is processed securely using Amazon AWS, with support for data sovereignty. Further, it is not
stored beyond the processing time or used to train any AWS service.

**Your data remains your data. Always. In perpetuity. No Exceptions.**

:::

A common user concern is how online services handle their data.

-   Does the data remain their property?
-   How is the data used by the service?
-   Who can access the data once it's uploaded to the service?

This document aims to explain, in simple language, how Describo handles **your** data.

Describo (the application, component and cloud service) does not assert any right or title to data
that you process with it.

If you download the Describo application and use it to describe a folder of content, that content
does not leave your local computer. Furthermore that content is not stored inside any part of the
Describo application. In this way, you can use Describo to interact with your data (describe it,
annotate the entities, transcribe content manually, visualise it) confident in the knowledge that
the data has not left its source location.

As Describo is an application that runs on your computer, any data source that is connected to your
computer can be interacted with inside Describo. Whether it's a Dropbox folder, Google Drive, a
Microsoft Onedrive folder or your company fileshare (Z:\\ drive or whatever); if it's mounted on
your computer, Describo can work with it.

Any metadata that you create with Describo remains in the source folder inside a file named
`ro-crate-metadata.json`. Nothing is locked up inside the application.

## The Describo Cloud

If you choose to register with the Describo cloud and purchase credits to use the text extraction,
entity recognition or assistant capabilities, the data that you select for processing will be
uploaded to the Describo cloud. Detailed information about the Describo Cloud is at
[Cloud Services and Data Processing](/docs/guide/data-processing) but following is a plain english
explanation of that content.

-   Describo does not assert any right or title to any of the outputs of the cloud service. The
    Describo Cloud empowers you to create, while you retain complete ownership of your outputs.

-   The Describo Cloud is built using Amazon AWS. A good starting point for more information about
    the data protection capabilities of AWS is found
    [here](https://aws.amazon.com/compliance/data-protection/).

-   The Describo Cloud supports _Data Sovereignty_. It is a common requirement that user data be
    processed in regions that are consistent with your local legal requirements. To support this,
    the Describo cloud operates in 3 regions globally and the region you use is determined via
    geolocation of your IP address; ie the service you use is based on your location. **Data
    Sovereignty in this context does not relate to the ownership of the data. It is the
    responsibility of the user to ensure that they have permission from the data owner to work with
    the data. This is especially true when it comes to Indigenous data.**

-   The services that Describo Cloud uses are AWS Textract, Comprehend and Bedrock. Links to those
    services, and their FAQs explaining how data is handled, are on the data processing page. In
    summary: your data is processed by those services and **it does not go elsewhere**; including to
    the providers of the Large Language Model underlying the assistant.

-   The Describo Cloud does not store your data beyond what is required to process it and return the
    response. Backups of your data are not made. No one other than the service administrators can
    access your data and even then, only when it's actually on the service itself (which is only
    long enough to process it; typically less than a minute).

-   **Your data will not be used to train any AWS service**.The AWS Organisation that runs the
    services has been configured to explicitly opt out of any training on data uploaded to the
    cloud.

<disqus/>
