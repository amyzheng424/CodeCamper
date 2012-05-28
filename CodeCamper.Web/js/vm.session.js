﻿// Depends on 
//	Knockout
// 	app.logger
//	app.dataservice.session
// ----------------------------------------------
app.vm = app.vm || {};

app.vm.session = (function (ko, ds, logger) {
    var
        session = ko.observable(),
        activate = function (routeData) {
            logger.info('activated session view model');
            var sessionId = routeData.id;
            var result = app.datacontext.sessions.getById(sessionId);
            session(result);
        };
    return {
        session: session,
        activate: activate
    };
})(ko, app.dataservice.session, app.config.logger);
