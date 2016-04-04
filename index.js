var JID = require('xmpp-jid');


module.exports = {
    dataTypes: {
        jid: {
            set: function (newVal) {
                return {
                    val: newVal ? new JID.JID(newVal) : "",
                    type: 'jid'
                };
            },
            compare: function (j1, j2) {
                return JID.equal(j1, j2, false);
            }
        }
    }
};
