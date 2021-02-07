// third_party/blink/public/mojom/csp/cat_service_provider.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/csp/cat_service_provider.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');


  var CATServiceType = {};
  CATServiceType.kDirty = 0;
  CATServiceType.kFormData = 1;
  CATServiceType.kRaw = 2;
  CATServiceType.kChunked = 3;
  CATServiceType.kFiller = 4;
  CATServiceType.MIN_VALUE = 0,
  CATServiceType.MAX_VALUE = 4,

  CATServiceType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  CATServiceType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function CATData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CATData.prototype.initDefaults_ = function() {
    this.data = null;
  };
  CATData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CATData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CATData.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CATData.encodedSize = codec.kStructHeaderSize + 8;

  CATData.decode = function(decoder) {
    var packed;
    var val = new CATData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  CATData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CATData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };
  function CATId(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CATId.prototype.initDefaults_ = function() {
    this.id = 0;
  };
  CATId.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CATId.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CATId.encodedSize = codec.kStructHeaderSize + 8;

  CATId.decode = function(decoder) {
    var packed;
    var val = new CATId();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  CATId.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CATId.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.id);
  };
  function CATServiceProvider_Register_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CATServiceProvider_Register_Params.prototype.initDefaults_ = function() {
    this.service = new bindings.InterfaceRequest();
    this.type = 0;
  };
  CATServiceProvider_Register_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CATServiceProvider_Register_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CATServiceProvider_Register_Params.service
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CATServiceProvider_Register_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, CATServiceType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CATServiceProvider_Register_Params.encodedSize = codec.kStructHeaderSize + 8;

  CATServiceProvider_Register_Params.decode = function(decoder) {
    var packed;
    var val = new CATServiceProvider_Register_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.service =
        decoder.decodeStruct(codec.InterfaceRequest);
    val.type =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  CATServiceProvider_Register_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CATServiceProvider_Register_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.service);
    encoder.encodeStruct(codec.Int32, val.type);
  };
  function CATService_Initialize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CATService_Initialize_Params.prototype.initDefaults_ = function() {
  };
  CATService_Initialize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CATService_Initialize_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CATService_Initialize_Params.encodedSize = codec.kStructHeaderSize + 0;

  CATService_Initialize_Params.decode = function(decoder) {
    var packed;
    var val = new CATService_Initialize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CATService_Initialize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CATService_Initialize_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function CATService_AddCAT_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CATService_AddCAT_Params.prototype.initDefaults_ = function() {
    this.data = null;
  };
  CATService_AddCAT_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CATService_AddCAT_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CATService_AddCAT_Params.data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CATData, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CATService_AddCAT_Params.encodedSize = codec.kStructHeaderSize + 8;

  CATService_AddCAT_Params.decode = function(decoder) {
    var packed;
    var val = new CATService_AddCAT_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeStructPointer(CATData);
    return val;
  };

  CATService_AddCAT_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CATService_AddCAT_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CATData, val.data);
  };
  function CATService_AddCAT_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CATService_AddCAT_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  CATService_AddCAT_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CATService_AddCAT_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CATService_AddCAT_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CATId, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CATService_AddCAT_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CATService_AddCAT_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CATService_AddCAT_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStructPointer(CATId);
    return val;
  };

  CATService_AddCAT_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CATService_AddCAT_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CATId, val.result);
  };
  function CATService_ProcessCAT_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CATService_ProcessCAT_Params.prototype.initDefaults_ = function() {
    this.id = null;
  };
  CATService_ProcessCAT_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CATService_ProcessCAT_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CATService_ProcessCAT_Params.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CATId, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CATService_ProcessCAT_Params.encodedSize = codec.kStructHeaderSize + 8;

  CATService_ProcessCAT_Params.decode = function(decoder) {
    var packed;
    var val = new CATService_ProcessCAT_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStructPointer(CATId);
    return val;
  };

  CATService_ProcessCAT_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CATService_ProcessCAT_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CATId, val.id);
  };
  function CATService_ProcessCAT_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CATService_ProcessCAT_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  CATService_ProcessCAT_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CATService_ProcessCAT_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CATService_ProcessCAT_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CATData, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CATService_ProcessCAT_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CATService_ProcessCAT_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CATService_ProcessCAT_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStructPointer(CATData);
    return val;
  };

  CATService_ProcessCAT_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CATService_ProcessCAT_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CATData, val.result);
  };
  function CATService_Destroy_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CATService_Destroy_Params.prototype.initDefaults_ = function() {
    this.id = null;
  };
  CATService_Destroy_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CATService_Destroy_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CATService_Destroy_Params.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CATId, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CATService_Destroy_Params.encodedSize = codec.kStructHeaderSize + 8;

  CATService_Destroy_Params.decode = function(decoder) {
    var packed;
    var val = new CATService_Destroy_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStructPointer(CATId);
    return val;
  };

  CATService_Destroy_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CATService_Destroy_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CATId, val.id);
  };
  function CATService_Terminate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CATService_Terminate_Params.prototype.initDefaults_ = function() {
  };
  CATService_Terminate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CATService_Terminate_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CATService_Terminate_Params.encodedSize = codec.kStructHeaderSize + 0;

  CATService_Terminate_Params.decode = function(decoder) {
    var packed;
    var val = new CATService_Terminate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CATService_Terminate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CATService_Terminate_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kCATServiceProvider_Register_Name = 0;

  function CATServiceProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CATServiceProvider,
                                                   handleOrPtrInfo);
  }

  function CATServiceProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CATServiceProvider, associatedInterfacePtrInfo);
  }

  CATServiceProviderAssociatedPtr.prototype =
      Object.create(CATServiceProviderPtr.prototype);
  CATServiceProviderAssociatedPtr.prototype.constructor =
      CATServiceProviderAssociatedPtr;

  function CATServiceProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  CATServiceProviderPtr.prototype.register = function() {
    return CATServiceProviderProxy.prototype.register
        .apply(this.ptr.getProxy(), arguments);
  };

  CATServiceProviderProxy.prototype.register = function(service, type) {
    var params_ = new CATServiceProvider_Register_Params();
    params_.service = service;
    params_.type = type;
    var builder = new codec.MessageV0Builder(
        kCATServiceProvider_Register_Name,
        codec.align(CATServiceProvider_Register_Params.encodedSize));
    builder.encodeStruct(CATServiceProvider_Register_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CATServiceProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  CATServiceProviderStub.prototype.register = function(service, type) {
    return this.delegate_ && this.delegate_.register && this.delegate_.register(service, type);
  }

  CATServiceProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCATServiceProvider_Register_Name:
      var params = reader.decodeStruct(CATServiceProvider_Register_Params);
      this.register(params.service, params.type);
      return true;
    default:
      return false;
    }
  };

  CATServiceProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCATServiceProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCATServiceProvider_Register_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CATServiceProvider_Register_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCATServiceProviderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CATServiceProvider = {
    name: 'blink.mojom.CATServiceProvider',
    kVersion: 0,
    ptrClass: CATServiceProviderPtr,
    proxyClass: CATServiceProviderProxy,
    stubClass: CATServiceProviderStub,
    validateRequest: validateCATServiceProviderRequest,
    validateResponse: null,
  };
  CATServiceProviderStub.prototype.validator = validateCATServiceProviderRequest;
  CATServiceProviderProxy.prototype.validator = null;
  var kCATService_Initialize_Name = 0;
  var kCATService_AddCAT_Name = 1;
  var kCATService_ProcessCAT_Name = 2;
  var kCATService_Destroy_Name = 3;
  var kCATService_Terminate_Name = 4;

  function CATServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CATService,
                                                   handleOrPtrInfo);
  }

  function CATServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CATService, associatedInterfacePtrInfo);
  }

  CATServiceAssociatedPtr.prototype =
      Object.create(CATServicePtr.prototype);
  CATServiceAssociatedPtr.prototype.constructor =
      CATServiceAssociatedPtr;

  function CATServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  CATServicePtr.prototype.initialize = function() {
    return CATServiceProxy.prototype.initialize
        .apply(this.ptr.getProxy(), arguments);
  };

  CATServiceProxy.prototype.initialize = function() {
    var params_ = new CATService_Initialize_Params();
    var builder = new codec.MessageV0Builder(
        kCATService_Initialize_Name,
        codec.align(CATService_Initialize_Params.encodedSize));
    builder.encodeStruct(CATService_Initialize_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CATServicePtr.prototype.addCAT = function() {
    return CATServiceProxy.prototype.addCAT
        .apply(this.ptr.getProxy(), arguments);
  };

  CATServiceProxy.prototype.addCAT = function(data) {
    var params_ = new CATService_AddCAT_Params();
    params_.data = data;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCATService_AddCAT_Name,
          codec.align(CATService_AddCAT_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CATService_AddCAT_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CATService_AddCAT_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CATServicePtr.prototype.processCAT = function() {
    return CATServiceProxy.prototype.processCAT
        .apply(this.ptr.getProxy(), arguments);
  };

  CATServiceProxy.prototype.processCAT = function(id) {
    var params_ = new CATService_ProcessCAT_Params();
    params_.id = id;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCATService_ProcessCAT_Name,
          codec.align(CATService_ProcessCAT_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CATService_ProcessCAT_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CATService_ProcessCAT_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CATServicePtr.prototype.destroy = function() {
    return CATServiceProxy.prototype.destroy
        .apply(this.ptr.getProxy(), arguments);
  };

  CATServiceProxy.prototype.destroy = function(id) {
    var params_ = new CATService_Destroy_Params();
    params_.id = id;
    var builder = new codec.MessageV0Builder(
        kCATService_Destroy_Name,
        codec.align(CATService_Destroy_Params.encodedSize));
    builder.encodeStruct(CATService_Destroy_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CATServicePtr.prototype.terminate = function() {
    return CATServiceProxy.prototype.terminate
        .apply(this.ptr.getProxy(), arguments);
  };

  CATServiceProxy.prototype.terminate = function() {
    var params_ = new CATService_Terminate_Params();
    var builder = new codec.MessageV0Builder(
        kCATService_Terminate_Name,
        codec.align(CATService_Terminate_Params.encodedSize));
    builder.encodeStruct(CATService_Terminate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CATServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  CATServiceStub.prototype.initialize = function() {
    return this.delegate_ && this.delegate_.initialize && this.delegate_.initialize();
  }
  CATServiceStub.prototype.addCAT = function(data) {
    return this.delegate_ && this.delegate_.addCAT && this.delegate_.addCAT(data);
  }
  CATServiceStub.prototype.processCAT = function(id) {
    return this.delegate_ && this.delegate_.processCAT && this.delegate_.processCAT(id);
  }
  CATServiceStub.prototype.destroy = function(id) {
    return this.delegate_ && this.delegate_.destroy && this.delegate_.destroy(id);
  }
  CATServiceStub.prototype.terminate = function() {
    return this.delegate_ && this.delegate_.terminate && this.delegate_.terminate();
  }

  CATServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCATService_Initialize_Name:
      var params = reader.decodeStruct(CATService_Initialize_Params);
      this.initialize();
      return true;
    case kCATService_Destroy_Name:
      var params = reader.decodeStruct(CATService_Destroy_Params);
      this.destroy(params.id);
      return true;
    case kCATService_Terminate_Name:
      var params = reader.decodeStruct(CATService_Terminate_Params);
      this.terminate();
      return true;
    default:
      return false;
    }
  };

  CATServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCATService_AddCAT_Name:
      var params = reader.decodeStruct(CATService_AddCAT_Params);
      this.addCAT(params.data).then(function(response) {
        var responseParams =
            new CATService_AddCAT_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kCATService_AddCAT_Name,
            codec.align(CATService_AddCAT_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CATService_AddCAT_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kCATService_ProcessCAT_Name:
      var params = reader.decodeStruct(CATService_ProcessCAT_Params);
      this.processCAT(params.id).then(function(response) {
        var responseParams =
            new CATService_ProcessCAT_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kCATService_ProcessCAT_Name,
            codec.align(CATService_ProcessCAT_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CATService_ProcessCAT_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCATServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCATService_Initialize_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CATService_Initialize_Params;
      break;
      case kCATService_AddCAT_Name:
        if (message.expectsResponse())
          paramsClass = CATService_AddCAT_Params;
      break;
      case kCATService_ProcessCAT_Name:
        if (message.expectsResponse())
          paramsClass = CATService_ProcessCAT_Params;
      break;
      case kCATService_Destroy_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CATService_Destroy_Params;
      break;
      case kCATService_Terminate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CATService_Terminate_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCATServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCATService_AddCAT_Name:
        if (message.isResponse())
          paramsClass = CATService_AddCAT_ResponseParams;
        break;
      case kCATService_ProcessCAT_Name:
        if (message.isResponse())
          paramsClass = CATService_ProcessCAT_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CATService = {
    name: 'blink.mojom.CATService',
    kVersion: 0,
    ptrClass: CATServicePtr,
    proxyClass: CATServiceProxy,
    stubClass: CATServiceStub,
    validateRequest: validateCATServiceRequest,
    validateResponse: validateCATServiceResponse,
  };
  CATServiceStub.prototype.validator = validateCATServiceRequest;
  CATServiceProxy.prototype.validator = validateCATServiceResponse;
  exports.CATServiceType = CATServiceType;
  exports.CATData = CATData;
  exports.CATId = CATId;
  exports.CATServiceProvider = CATServiceProvider;
  exports.CATServiceProviderPtr = CATServiceProviderPtr;
  exports.CATServiceProviderAssociatedPtr = CATServiceProviderAssociatedPtr;
  exports.CATService = CATService;
  exports.CATServicePtr = CATServicePtr;
  exports.CATServiceAssociatedPtr = CATServiceAssociatedPtr;
})();