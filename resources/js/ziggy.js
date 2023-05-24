const Ziggy = {"url":"https:\/\/corbp.test","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"api.geo.query":{"uri":"api\/geo","methods":["POST"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"random":{"uri":"random","methods":["GET","HEAD"]},"media.show":{"uri":"m\/{media}","methods":["GET","HEAD"],"bindings":{"media":"id"}},"stats":{"uri":"stats","methods":["GET","HEAD"]},"locations.index":{"uri":"locations","methods":["GET","HEAD"]},"locations.create":{"uri":"locations\/create","methods":["GET","HEAD"]},"locations.show":{"uri":"locations\/{location}","methods":["GET","HEAD"],"bindings":{"location":"slug"}},"sub-location.index":{"uri":"sub-locations","methods":["GET","HEAD"]},"sub-location.create":{"uri":"sub-locations\/create","methods":["GET","HEAD"]},"sub-location.show":{"uri":"sub-locations\/{subLocation}","methods":["GET","HEAD"],"bindings":{"subLocation":"slug"}},"device.index":{"uri":"devices","methods":["GET","HEAD"]},"device.show":{"uri":"devices\/{device}","methods":["GET","HEAD"],"bindings":{"device":"slug"}},"lens.index":{"uri":"lens","methods":["GET","HEAD"]},"lens.show":{"uri":"lens\/{lens}","methods":["GET","HEAD"],"bindings":{"lens":"slug"}},"tag.index":{"uri":"tags","methods":["GET","HEAD"]},"tag.create":{"uri":"tags\/create","methods":["GET","HEAD"]},"tag.show":{"uri":"tags\/{tag}","methods":["GET","HEAD"],"bindings":{"tag":"slug"}},"profile.edit":{"uri":"profile","methods":["GET","HEAD"]},"profile.update":{"uri":"profile","methods":["PATCH"]},"profile.destroy":{"uri":"profile","methods":["DELETE"]},"media.edit":{"uri":"m\/{media}\/edit","methods":["GET","HEAD"],"bindings":{"media":"id"}},"media.update":{"uri":"m\/{media}","methods":["PATCH"],"bindings":{"media":"id"}},"locations.store":{"uri":"locations","methods":["POST"]},"locations.edit":{"uri":"locations\/{location}\/edit","methods":["GET","HEAD"],"bindings":{"location":"slug"}},"locations.update":{"uri":"locations\/{location}","methods":["PATCH"],"bindings":{"location":"id"}},"locations.destroy":{"uri":"locations\/{location}","methods":["DELETE"],"bindings":{"location":"id"}},"sub-location.store":{"uri":"sub-locations","methods":["POST"]},"sub-location.edit":{"uri":"sub-locations\/{subLocation}\/edit","methods":["GET","HEAD"],"bindings":{"subLocation":"slug"}},"sub-location.update":{"uri":"sub-locations\/{subLocation}","methods":["PATCH"],"bindings":{"subLocation":"id"}},"sub-location.destroy":{"uri":"sub-locations\/{subLocation}","methods":["DELETE"],"bindings":{"subLocation":"id"}},"device.store":{"uri":"devices","methods":["POST"]},"device.edit":{"uri":"devices\/{device}\/edit","methods":["GET","HEAD"],"bindings":{"device":"slug"}},"device.update":{"uri":"devices\/{device}","methods":["PATCH"],"bindings":{"device":"id"}},"device.destroy":{"uri":"devices\/{device}","methods":["DELETE"],"bindings":{"device":"id"}},"lens.store":{"uri":"lens","methods":["POST"]},"lens.edit":{"uri":"lens\/{lens}\/edit","methods":["GET","HEAD"],"bindings":{"lens":"slug"}},"lens.update":{"uri":"lens\/{lens}","methods":["PATCH"],"bindings":{"lens":"id"}},"lens.destroy":{"uri":"lens\/{lens}","methods":["DELETE"],"bindings":{"lens":"id"}},"tag.store":{"uri":"tags","methods":["POST"]},"tags.edit":{"uri":"tags\/{tag}\/edit","methods":["GET","HEAD"],"bindings":{"tag":"slug"}},"tag.update":{"uri":"tags\/{tag}","methods":["PATCH"],"bindings":{"tag":"id"}},"tag.destroy":{"uri":"tags\/{tag}","methods":["DELETE"],"bindings":{"tag":"id"}},"upload":{"uri":"upload","methods":["GET","HEAD"]},"upload.progress":{"uri":"upload\/progress","methods":["GET","HEAD"]},"upload.handle":{"uri":"upload","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.store":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"password.update":{"uri":"password","methods":["PUT"]},"logout":{"uri":"logout","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
