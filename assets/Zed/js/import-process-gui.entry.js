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
    $('#process-status-container').load(url, function () {
        const status = $('#process-status-data').data('status');
        if ($.inArray(status, ['created', 'queued']) === -1) {
            $('#refresh-status-button').remove();
        }
    });
});
