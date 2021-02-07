// components/mirroring/mojom/mirroring_service_host.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/mirroring/mojom/mirroring_service_host.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mirroring.mojom');
  var cast_message_channel$ =
      mojo.internal.exposeNamespace('mirroring.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/mirroring/mojom/cast_message_channel.mojom', 'cast_message_channel.mojom.js');
  }
  var session_observer$ =
      mojo.internal.exposeNamespace('mirroring.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/mirroring/mojom/session_observer.mojom', 'session_observer.mojom.js');
  }
  var session_parameters$ =
      mojo.internal.exposeNamespace('mirroring.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/mirroring/mojom/session_parameters.mojom', 'session_parameters.mojom.js');
  }



  function MirroringServiceHost_Start_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MirroringServiceHost_Start_Params.prototype.initDefaults_ = function() {
    this.params = null;
    this.observer = new session_observer$.SessionObserverPtr();
    this.outboundChannel = new cast_message_channel$.CastMessageChannelPtr();
    this.inboundChannel = new bindings.InterfaceRequest();
  };
  MirroringServiceHost_Start_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MirroringServiceHost_Start_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MirroringServiceHost_Start_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, session_parameters$.SessionParameters, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MirroringServiceHost_Start_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MirroringServiceHost_Start_Params.outboundChannel
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MirroringServiceHost_Start_Params.inboundChannel
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MirroringServiceHost_Start_Params.encodedSize = codec.kStructHeaderSize + 32;

  MirroringServiceHost_Start_Params.decode = function(decoder) {
    var packed;
    var val = new MirroringServiceHost_Start_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params =
        decoder.decodeStructPointer(session_parameters$.SessionParameters);
    val.observer =
        decoder.decodeStruct(new codec.Interface(session_observer$.SessionObserverPtr));
    val.outboundChannel =
        decoder.decodeStruct(new codec.Interface(cast_message_channel$.CastMessageChannelPtr));
    val.inboundChannel =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MirroringServiceHost_Start_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MirroringServiceHost_Start_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(session_parameters$.SessionParameters, val.params);
    encoder.encodeStruct(new codec.Interface(session_observer$.SessionObserverPtr), val.observer);
    encoder.encodeStruct(new codec.Interface(cast_message_channel$.CastMessageChannelPtr), val.outboundChannel);
    encoder.encodeStruct(codec.InterfaceRequest, val.inboundChannel);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kMirroringServiceHost_Start_Name = 720633665;

  function MirroringServiceHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MirroringServiceHost,
                                                   handleOrPtrInfo);
  }

  function MirroringServiceHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MirroringServiceHost, associatedInterfacePtrInfo);
  }

  MirroringServiceHostAssociatedPtr.prototype =
      Object.create(MirroringServiceHostPtr.prototype);
  MirroringServiceHostAssociatedPtr.prototype.constructor =
      MirroringServiceHostAssociatedPtr;

  function MirroringServiceHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  MirroringServiceHostPtr.prototype.start = function() {
    return MirroringServiceHostProxy.prototype.start
        .apply(this.ptr.getProxy(), arguments);
  };

  MirroringServiceHostProxy.prototype.start = function(params, observer, outboundChannel, inboundChannel) {
    var params_ = new MirroringServiceHost_Start_Params();
    params_.params = params;
    params_.observer = observer;
    params_.outboundChannel = outboundChannel;
    params_.inboundChannel = inboundChannel;
    var builder = new codec.MessageV0Builder(
        kMirroringServiceHost_Start_Name,
        codec.align(MirroringServiceHost_Start_Params.encodedSize));
    builder.encodeStruct(MirroringServiceHost_Start_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MirroringServiceHostStub(delegate) {
    this.delegate_ = delegate;
  }
  MirroringServiceHostStub.prototype.start = function(params, observer, outboundChannel, inboundChannel) {
    return this.delegate_ && this.delegate_.start && this.delegate_.start(params, observer, outboundChannel, inboundChannel);
  }

  MirroringServiceHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMirroringServiceHost_Start_Name:
      var params = reader.decodeStruct(MirroringServiceHost_Start_Params);
      this.start(params.params, params.observer, params.outboundChannel, params.inboundChannel);
      return true;
    default:
      return false;
    }
  };

  MirroringServiceHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMirroringServiceHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMirroringServiceHost_Start_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MirroringServiceHost_Start_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMirroringServiceHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MirroringServiceHost = {
    name: 'mirroring.mojom.MirroringServiceHost',
    kVersion: 0,
    ptrClass: MirroringServiceHostPtr,
    proxyClass: MirroringServiceHostProxy,
    stubClass: MirroringServiceHostStub,
    validateRequest: validateMirroringServiceHostRequest,
    validateResponse: null,
  };
  MirroringServiceHostStub.prototype.validator = validateMirroringServiceHostRequest;
  MirroringServiceHostProxy.prototype.validator = null;
  exports.MirroringServiceHost = MirroringServiceHost;
  exports.MirroringServiceHostPtr = MirroringServiceHostPtr;
  exports.MirroringServiceHostAssociatedPtr = MirroringServiceHostAssociatedPtr;
})();