/*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

/* Control the viewer customization.
 * It lists down all supported variables with default values.
 **/
var viewerConfig = {
    showAnnotationTools: true,
    enableFormFilling: true,
    showLeftHandPanel: true,
    showDownloadPDF: true,
    showPrintPDF: true,
    showPageControls: true,
    dockPageControls: true,
    defaultViewMode: "", /* Allowed possible values are "FIT_PAGE", "FIT_WIDTH" or "". */
};

/* Wait for Adobe Document Services PDF Embed API to be ready */
document.addEventListener("adobe_dc_view_sdk.ready", function () {
    /* Initialize the AdobeDC View object */
    var adobeDCView = new AdobeDC.View({
        /* Pass your registered client id */
        clientId: "0729d784a82f43b08b3b5cf9d2365e71",
        /* Pass the div id in which PDF should be rendered */
        divId: "viewer",
    });

    /* Invoke the file preview API on Adobe DC View object */
    adobeDCView.previewFile({
        /* Pass information on how to access the file */
        content: {
            /* Location of file where it is hosted */
            location: {
                url: "https://ashleystage.scene7.com/is/content/AshleyStage/ecatalogs/pdfs/2022-AFI-Rugs-Catalog.pdf",
                /*
                If the file URL requires some additional headers, then it can be passed as follows:-
                headers: [
                    {
                        key: "<HEADER_KEY>",
                        value: "<HEADER_VALUE>",
                    }
                ]
                */
            },
        },
        /* Pass meta data of file */
        metaData: {
            /* file name */
            fileName: "Bodea Brochure.pdf"
        }
    }, viewerConfig);
});
