/**
 * Copyright (c) 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

'use strict';

require('../sass/main.scss');

var $id = $('#refresh-status-button').data('id');
$('#refresh-status-button').click(function (e) {
    e.preventDefault();

    const url = '/import-process-gui/index/view-status?id-process=' + $id;
    $.get({
        url,
        success: function (response) {
            if ($(response).find('form[name="auth"]').length > 0) {
                document.location.href = '/security-gui/login';

                return;
            }

            $('#process-status-container').html(response);

            // remove refresh button if import process is not in created or queued status
            const importProcessStatus = $('#process-status-data').data('status');
            if ($.inArray(importProcessStatus, ['created', 'queued']) === -1) {
                $('#refresh-status-button').remove();
            }
        },
    });
});
