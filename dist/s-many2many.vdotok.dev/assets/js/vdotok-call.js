/*!
 * 
 *  VidTok Call version 0.17.1
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CVDOTOK"] = factory();
	else
		root["CVDOTOK"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Broadcast = exports.ManyToMany = exports.Confrence = exports.Client = exports.version = exports.name = void 0;
/* eslint-disable prettier/prettier */
// Helpful name and version exports
const version_1 = __webpack_require__(1);
const version = version_1.LIBRARY_VERSION;
exports.version = version;
const name = "vdotok-call";
exports.name = name;
// Export namespaced web
const index_jsonrpc_1 = __webpack_require__(2);
exports.Client = index_jsonrpc_1.default;
const Conference_1 = __webpack_require__(38);
exports.Confrence = Conference_1.default;
const ManyToMany_1 = __webpack_require__(39);
exports.ManyToMany = ManyToMany_1.default;
const broadcast_1 = __webpack_require__(40);
exports.Broadcast = broadcast_1.default;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LIBRARY_VERSION = void 0;
exports.LIBRARY_VERSION = "0.0.1";


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
// @ts-ignore
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const Auth_1 = __webpack_require__(6);
// register model for registering
const RegisterModel_1 = __webpack_require__(8);
// register event handler
const RegisterEventHandler_1 = __webpack_require__(10);
//call model for initiating a call
const CallRequestModel_1 = __webpack_require__(11);
// Helper
const CommonHelper_1 = __webpack_require__(5);
const ManyToManyClass_1 = __webpack_require__(13);
const vidWebRTC = __webpack_require__(14);
const mediaDevices = navigator.mediaDevices;
class Client extends events_1.EventEmitter {
    constructor(_Credentials) {
        super();
        this.UUIDSessions = {};
        this.UUIDSessionTypes = {};
        this.UUIDSessionMediaTypes = {};
        this.videoStatus = 1;
        this.audioStatus = 1;
        this.isManyToMany = false;
        this.manyToMany = {};
        this.participantsInCall = 0;
        this.projectID = _Credentials.projectID;
        this.projectSecret = _Credentials.secret;
        this.Authentication(_Credentials);
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        console.log("====DER===", credentials, this.projectID, this.projectSecret, this.clientToken);
        //this.Connect('wss://cpaas-url-based-demo.vdotok.com:8443/call')
        // this.Connect('wss://kurento3.togee.io:8443/call');
        if (credentials.host) {
            this.Connect(credentials.host);
        }
        else {
            Auth_1.default.Authorization(credentials.projectID, credentials.secret).then((response) => {
                console.log("===Authorization-outer===", response);
                if (response && response.status == 200) {
                    let host = `${response.media_server_map.protocol}://${response.media_server_map.host}:${response.media_server_map.port}/${response.media_server_map.end_point}`;
                    this.Connect(host);
                    console.log("===Authorization===", response);
                }
                else
                    EventHandler_1.default.OnAuthError(response.message, this);
            });
        }
    }
    Connect(mediaServer) {
        var webSocketConnetion = new WebSocket(mediaServer);
        webSocketConnetion.onmessage = (message) => {
            var messageData = JSON.parse(message.data);
            console.log('Received message: ', messageData);
            switch (messageData.requestType) {
                case 'register':
                    RegisterEventHandler_1.default.SetRegisterResponse(messageData, this);
                    break;
                case 'callResponse':
                    console.log(' CallResponse: ', messageData);
                    this.CallResponse(messageData);
                    break;
                case 'incomingCall':
                    this.callSession = messageData.sessionUUID;
                    this.currentFromUser = messageData.from;
                    this.UUIDSessions[messageData.from] = messageData.sessionUUID;
                    this.UUIDSessionTypes[messageData.sessionUUID] = messageData.call_type;
                    this.UUIDSessionMediaTypes[messageData.from] = messageData.media_type;
                    this.mediaType = messageData.media_type;
                    this.isManyToMany = (messageData.call_type == "many_to_many");
                    console.log('incomingCall case: ', message);
                    EventHandler_1.default.OnIncomingCall(messageData, this);
                    // this.incomingCall(messageData);
                    break;
                case 'startCommunication':
                    this.SessionStart(messageData);
                    break;
                case 'stopCommunication':
                    console.info('Communication ended by remote peer');
                    this.StopSession(messageData);
                    break;
                case 'iceCandidate':
                    this.AddCandidate(messageData);
                    break;
                case 'session_invite':
                    this.SessionInvite(messageData);
                    break;
                case 'session_cancel':
                    this.SessionCancel(messageData);
                    break;
                case 'session_break':
                    this.SessionCancel(messageData);
                    //this.DisposeWebrtc(true);
                    break;
                case 'state_information':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    this.SetCallerStatus(messageData);
                    break;
                /////////////////////////////////////////////
                /////////  many to many events
                case 'existing_participants':
                    console.log("===onParticipantOffer== exiting", messageData, new Date().toLocaleTimeString());
                    this.OnExistingParticipants(messageData);
                    //EventHandler.SetExistingParticipants(messageData,this);
                    break;
                case 'new_participant_arrived':
                    console.log("===onParticipantOffer== exiting new", messageData, new Date().toLocaleTimeString());
                    this.OnNewParticipant(messageData);
                    break;
                case 'participantLeft':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    this.OnParticipantLeft(messageData);
                    break;
                ///////////////////////////////////////////////////
                ////////////////// public url events
                case 'publicURL':
                    console.log("===publicURL", messageData, new Date().toLocaleTimeString());
                    this.OnPublicURL(messageData);
                    break;
                case 'ping':
                    this.SendPacket({ requestType: 'pong', "mcToken": this.McToken });
                    break;
                /////////////////////////////////////////////////
                default:
                // console.error('Unrecognized message', messageData);
            }
        };
        webSocketConnetion.onclose = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnClose socket==", res);
        };
        webSocketConnetion.onopen = (res) => {
            EventHandler_1.default.OnConnection(res, this);
            console.log("OnOpen socket==", res);
        };
        //   webSocketConnetion.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        webSocketConnetion.onerror = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
        };
        this.ws = webSocketConnetion;
    }
    ///////////////////////////////////////////////
    ///////////////////// one to one call
    Call(params) {
        this.mediaType = "video";
        this.to = Array.isArray(params.to) ? params.to : [params.to];
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        CommonHelper_1.SetPlaysInline(this.localVideo);
        var options = {
            localVideo: params.localVideo,
            remoteVideo: params.remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendrecv(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferCall(error, offerSdp, "video", (params && params.data ? params.data : {}));
            });
        });
    }
    AudioCall(params) {
        var constraints = {
            audio: true,
            video: false
        };
        this.mediaType = "audio";
        this.to = Array.isArray(params.to) ? params.to : [params.to];
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        CommonHelper_1.SetPlaysInline(this.localVideo);
        var options = {
            localVideo: params.localVideo,
            remoteVideo: params.remoteVideo,
            mediaConstraints: constraints,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendrecv(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferCall(error, offerSdp, "audio", (params && params.data ? params.data : {}));
            });
        });
    }
    //////////////////// end one to one call
    ///////////////////////////////////////////////////
    OnPublicURL(messageData) {
        EventHandler_1.default.PublicURL(messageData, this);
    }
    OnExistingParticipants(messageData) {
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnExistingParticipants(messageData);
        }
    }
    OnNewParticipant(messageData) {
        this.participantsInCall = messageData.total_participants ? (messageData.total_participants - 1) : (this.participantsInCall + 1);
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnNewParticipant(messageData);
        }
    }
    OnParticipantLeft(messageData) {
        this.participantsInCall > 0 ? this.participantsInCall-- : 0;
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnParticipantLeft(messageData);
        }
    }
    StopSession(messageData) {
        if (this.isManyToMany) {
            return;
        }
        EventHandler_1.default.SessionEnd(messageData, this);
        this.DisposeWebrtc(true);
    }
    SessionInvite(messageData) {
        if (this.isManyToMany) {
            return;
        }
        EventHandler_1.default.SessionInvite(messageData, this);
    }
    SessionCancel(messageData) {
        this.participantsInCall > 0 ? this.participantsInCall-- : 0;
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnSessionCancel(messageData);
            return;
        }
        EventHandler_1.default.SessionCancel(messageData, this);
    }
    SetCallerStatus(messageData) {
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.SetParticipantStatus(messageData);
            return;
        }
        EventHandler_1.default.SetCallerStatus(messageData, this);
    }
    async AddCandidate(message) {
        if (this.rtcPears) {
            await this.rtcPears.addIceCandidate(message.candidate);
            return;
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.AddCandidate(message);
            return;
        }
        this.webRtcPeer.addIceCandidate(message.candidate, (error) => {
            if (error) {
                EventHandler_1.default.OnAddCandidate(error, this);
                return console.error('Error adding candidate: ' + error);
            }
        });
    }
    CallResponse(response) {
        if (this.rtcPears) {
            let answer = new RTCSessionDescription({
                type: 'answer',
                sdp: response.sdpAnswer
            });
            this.rtcPears.setRemoteDescription(answer);
            return;
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.CallResponse(response);
            return;
        }
        EventHandler_1.default.OnCallResponse(response, this);
        console.info('CallResponse', this.webRtcPeer, response);
        if (response.response == 'accepted') {
            this.webRtcPeer.processAnswer(response.sdpAnswer, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
        }
    }
    SessionStart(message) {
        if (this.rtcPears) {
            let answer = new RTCSessionDescription({
                type: 'answer',
                sdp: message.sdpAnswer
            });
            this.rtcPears.setRemoteDescription(answer);
            return;
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.SessionStart(message);
            return;
        }
        EventHandler_1.default.SessionStart(message, this);
        this.webRtcPeer.processAnswer(message.sdpAnswer, (error) => {
            if (error) {
                EventHandler_1.default.SessionSDP(error, this);
                return console.error(error);
            }
        });
    }
    AcceptCall(localVideo, remoteVideo) {
        this.localVideo = localVideo;
        let from = this.currentFromUser;
        //let mediaType=this.UUIDSessionMediaTypes[from];
        let mediaType = this.mediaType;
        var constraints = {
            audio: true,
            video: mediaType != "audio"
        };
        var options = {
            mediaConstraints: constraints,
            localVideo: localVideo,
            remoteVideo: remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, from);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendrecv(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferIncomingCall(error, offerSdp, from);
            });
        });
    }
    RejectCall(from = null, disposeWebRTC = true) {
        if (!from) {
            from = this.currentFromUser;
        }
        let response = {
            "type": "response",
            "from": from,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "responseCode": 496,
            "responseMessage": "rejected"
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false, from, disposeWebRTC);
    }
    onOfferIncomingCall(error, offerSdp, from) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	callResponse : 'accept',
        // 	sdpOffer : offerSdp
        // };
        let response = {
            "type": "request",
            "requestType": "session_invite",
            "sdpOffer": offerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
    }
    /*************
     * Register user to SDK
     */
    Register(referenceID, authorizationToken) {
        this.currentUser = referenceID;
        let regMessage = new RegisterModel_1.default();
        regMessage.requestID = new Date().getTime().toString();
        regMessage.projectID = this.projectID;
        regMessage.referenceID = referenceID;
        regMessage.authorizationToken = authorizationToken;
        regMessage.SendRegisterRequest(this.ws);
    }
    /************************************************************************
     *
     * Call one to many Broadcasting
     *
     */
    PulicBroadCast(params) {
        params["broadcastType"] = 1;
        params["to"] = [];
        this.Broadcasting(params);
    }
    PublicShareScreen(params) {
        params["broadcastType"] = 1;
        let sessionUUID = new Date().getTime().toString();
        let associatedSessionUUID = new Date().getTime().toString();
        this.ScreenSharingOld(params);
    }
    ScreenShare(params) {
        params["broadcastType"] = 1;
        let sessionUUID = new Date().getTime().toString();
        let associatedSessionUUID = new Date().getTime().toString();
        this.ScreenSharingOld(params);
    }
    ScreenSharing(params) {
        this.localVideo = params.localVideo;
        let displayMediaOptions = {
            video: {
                cursor: "always"
            },
            audio: false
        };
        mediaDevices.getDisplayMedia(displayMediaOptions).then(async (stream) => {
            //////////////////////////////////////
            /////peer connection
            this.mediaType = "video";
            this.to = params.to;
            this.currentFromUser = this.currentUser;
            let uUID = new Date().getTime().toString();
            let assUUID = "";
            let isPublic = (params.hasOwnProperty("broadcastType")) ? params["broadcastType"] : 0;
            let session_type = "screen";
            const configuration = { 'iceServers': [{ 'urls': 'stun:stun.l.google.com:19302' }] };
            const peerConnection = new RTCPeerConnection(configuration);
            this.rtcPears = peerConnection;
            /////////////////////////////////////
            /////////////// create offer
            const offerSdp = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offerSdp);
            this.onOfferOneToManyCall(null, offerSdp.sdp, uUID, assUUID, isPublic, session_type);
            ////////////////////////////////////
            ////////////////////////////////////
            // Listen for local ICE candidates on the local RTCPeerConnection
            peerConnection.addEventListener('icecandidate', event => {
                if (event.candidate) {
                    this.onIceCandidate(event.candidate, this.currentUser);
                }
            });
            // Listen for connectionstatechange on the local RTCPeerConnection
            peerConnection.addEventListener('connectionstatechange', event => {
                if (peerConnection.connectionState === 'connected') {
                    console.log("Peers-connected:::");
                    // Peers connected!
                }
            });
            peerConnection.addEventListener('track', async (event) => {
                //	remoteStream.addTrack(event.track, remoteStream);
            });
            ///////////////end peer con
            ///////////////////////////////////////////
            stream.getTracks().forEach((track) => {
                peerConnection.addTrack(track, stream);
            });
            params.localVideo.srcObject = stream;
            params.localVideo.play();
        });
    }
    ScreenSharingOld(params) {
        this.mediaType = "video";
        this.to = params.to;
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        let uUID = (params.hasOwnProperty("sessionUUID")) ? params["sessionUUID"] : new Date().getTime().toString();
        let assUUID = (params.hasOwnProperty("associatedSessionUUID")) ? params["associatedSessionUUID"] : "";
        let isPublic = (params.hasOwnProperty("broadcastType")) ? params["broadcastType"] : 0;
        let session_type = "screen";
        const constraints = { audio: false,
            video: {
                mandatory: { chromeMediaSource: 'desktop',
                    //chromeMediaSourceId: streamId,
                    maxWidth: window.screen.width,
                    maxHeight: window.screen.height
                }
            } };
        CommonHelper_1.SetPlaysInline(this.localVideo);
        var options = {
            localVideo: params.localVideo,
            mediaConstraints: constraints,
            sendSource: 'desktop',
            //remoteVideo : params.remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendrecv(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferOneToManyCall(error, offerSdp, uUID, assUUID, isPublic, session_type);
            });
        });
    }
    Broadcasting(params) {
        this.mediaType = "video";
        this.to = params.to;
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        let uUID = (params.hasOwnProperty("sessionUUID")) ? params["sessionUUID"] : new Date().getTime().toString();
        let assUUID = (params.hasOwnProperty("associatedSessionUUID")) ? params["associatedSessionUUID"] : "";
        let isPublic = (params.hasOwnProperty("broadcastType")) ? params["broadcastType"] : 0;
        let session_type = "call";
        CommonHelper_1.SetPlaysInline(this.localVideo);
        var options = {
            localVideo: params.localVideo,
            //remoteVideo : params.remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferOneToManyCall(error, offerSdp, uUID, assUUID, isPublic, session_type);
            });
        });
    }
    onOfferOneToManyCall(error, offerSdp, uUID, assUUID, isPublic, session_type) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_many";
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.call_type = "one_to_many";
        callRequest.session_type = session_type;
        //////////////////////////////////////////
        ///////for public url/group
        callRequest.custon_field("broadcastType", isPublic);
        callRequest.custon_field("associatedSessionUUID", assUUID);
        ///////////////////////////////////////////
        ///////////////////////////////////////////
        callRequest.SendCallRequest(this.ws);
    }
    AcceptBroadcast(remoteVideo) {
        let from = this.currentFromUser;
        this.mediaType = "video";
        CommonHelper_1.SetPlaysInline(remoteVideo);
        var options = {
            remoteVideo: remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, from);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferIncomingCall(error, offerSdp, from);
            });
        });
    }
    /*********************************************************
     *
     * End Call One To Many Type
     *
     *
     *********************************************************/
    /**
     *
     * @param error
     * @param offerSdp
     * @returns
     */
    onOfferCall(error, offerSdp, media_type, data = {}) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.media_type = media_type;
        if (data && Object.keys(data).length) {
            callRequest.data = data;
        }
        callRequest.SendCallRequest(this.ws);
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_one";
        console.log(' OnOfferCall :: :: ::', media_type);
        // var message = {
        // 	id : 'call',
        // 	from : this.currentUser,
        // 	to : this.to,
        // 	sdpOffer : offerSdp
        // };
        // console.log('Invoking SDP Message',message);
        // this.SendPacket(message);
    }
    DisposeWebrtc(status, from = null, disposeWebRTC = true) {
        if (!from) {
            from = this.currentFromUser;
        }
        if (this.webRtcPeer) {
            if (disposeWebRTC) {
                this.webRtcPeer.dispose();
                this.webRtcPeer = null;
            }
            if (status) {
                var messageStop = {
                    "type": "request",
                    "requestType": "session_cancel",
                    "requestID": new Date().getTime().toString(),
                    "sessionUUID": this.UUIDSessions[from],
                    "mcToken": "f3101a4f686d4dd7993ded88d9e386e5"
                };
                this.SendPacket(messageStop);
            }
            let session = this.UUIDSessions[from];
            delete this.UUIDSessionTypes[session];
            delete this.UUIDSessions[from];
        }
    }
    onError(error) {
        EventHandler_1.default.OnRTCPeer(error, this);
    }
    onIceCandidate(candidate, referenceID) {
        console.log("Local candidate" + JSON.stringify(candidate));
        var message = {
            id: 'onIceCandidate',
            requestType: 'onIceCandidate',
            type: "request",
            candidate: candidate,
            referenceID: referenceID,
            sessionUUID: this.UUIDSessions[referenceID]
        };
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * EndCall
     */
    EndCall(from) {
        if (!from) {
            from = this.currentFromUser;
        }
        let messageStop = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(messageStop);
        this.DisposeWebrtc(false);
    }
    CancelCall() {
        let from = this.currentFromUser;
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    /////////////////////
    ////Mic and Camera Events
    SetMicMute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video" && this.videoStatus == 1) ? 1 : 0;
            this.audioStatus = 0;
            let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": session,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = false;
            if (this.localVideo.localName == "audio") {
                this.localVideo.audioTracks[0].enabled = false;
            }
        }
    }
    /**
     * SetMicMute
     */
    SetMicUnmute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video" && this.videoStatus == 1) ? 1 : 0;
            this.audioStatus = 1;
            let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": session,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = true;
            if (this.localVideo.localName == "audio")
                this.localVideo.audioTracks[0].enabled = true;
        }
    }
    /**
     * SetCameraOn
     */
    SetCameraOn() {
        if (this.localVideo && this.localVideo != undefined) {
            this.videoStatus = 1;
            let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": session,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": 1
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = true;
        }
    }
    /**
     * SetCameraOff
     */
    SetCameraOff() {
        if (this.localVideo && this.localVideo != undefined) {
            this.videoStatus = 0;
            let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": session,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": 0
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = false;
        }
    }
    ////////////////////////////////////////////////////////////
    /////////////// MANY TO MANY CALLS
    GroupCall(params) {
        let manyTomany = new ManyToManyClass_1.default(this);
        this.localVideo = params.localVideo;
        this.manyToMany = manyTomany;
        this.isManyToMany = true;
        this.manyToMany.GroupCall(params);
    }
    JoinGroupCall(params) {
        let manyTomany = new ManyToManyClass_1.default(this);
        manyTomany.callSession = this.callSession;
        manyTomany.mediaType = this.mediaType;
        this.localVideo = params.localVideo;
        this.manyToMany = manyTomany;
        this.mediaType = params.call_type;
        this.localVideo = params.localVideo;
        this.isManyToMany = true;
        this.manyToMany.JoinGroupCall(params, this.callSession);
    }
    /**
     * SetParticipantVideo
     */
    SetParticipantVideo(refId, partiVideo) {
        this.manyToMany.SetParticipantVideo(refId, partiVideo);
    }
    LeaveGroupCall() {
        this.manyToMany.LeaveGroupCall();
    }
}
exports.default = Client;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
const CommonHelper_1 = __webpack_require__(5);
class EventHandlerService {
    constructor() { }
    OnAuthError(error, instance) {
        instance.emit("error", { type: "Authorization", message: "Your credentials for vidtok are invalid." + error });
    }
    OnAuthInitialError(error, instance) {
        instance.emit("error", { type: "Authorization", message: "You are not connected with vidtok server." + error });
    }
    OnConnection(res, instance) {
        instance.emit("connected", { type: "Success", message: "Vidtok server is connected successfully" });
    }
    OnDisconnection(err, instance) {
        instance.emit("disconnected", { type: "Error", message: "Vidtok server is disconnected." + err });
    }
    OnRegister(res, instance) {
        let socResponse = res.response;
        let status = socResponse.trim();
        if (status == "accepted") {
            instance.emit("register", { type: "REGISTER_ACCEPTED", message: "User is registered successfully" });
        }
        else {
            let message = socResponse.split(":")[1];
            message = message.trim();
            instance.emit("error", { type: "REGISTER_REJECTED", message: message });
        }
    }
    OnCallResponse(res, instance) {
        let status = res.response;
        let from = res.from;
        if (status == "accepted") {
            let resObject = { type: "CALL_ACCEPTED", message: "Call is accepted by receiver", from: from, call_type: "one_to_one" };
            if (res["call_type"])
                resObject["call_type"] = res["call_type"];
            instance.emit("call", resObject);
        }
        else {
            let resObject = { type: "CALL_REJECTED", message: "Call is rejected by receiver", from: from, call_type: "one_to_one" };
            if (res["call_type"])
                resObject["call_type"] = res["call_type"];
            instance.emit("call", resObject);
            instance.DisposeWebrtc(true);
        }
    }
    OnIncomingCall(res, instance) {
        let from = res.from;
        let callType = (res["call_type"] != undefined) ? res["call_type"] : "one_to_one";
        if (callType == "many_to_many") {
            instance.emit("groupCall", { type: "CALL_RECEIVED", message: "Received a call", from: from, call_type: res.media_type, session: callType });
            // instance.emit("groupCall",{type:"PARTICIPANT_LIST",message:"Participant List is available",participant_list:participantList});
        }
        else
            instance.emit("call", { type: "CALL_RECEIVED", message: "Received a call", from: from, call_type: res.media_type, session: callType });
    }
    OnIncomingGroupCall(res, instance) {
        let from = res.from;
        let callType = res["call_type"];
        instance.emit("groupCall", { type: "CALL_RECEIVED", message: "Received a call", from: from, call_type: res.media_type, session: callType });
    }
    SessionStart(res, instance) {
        instance.emit("call", { type: "CALL_STARTED", message: "Call is being started" });
    }
    GroupSessionStart(res, instance) {
        instance.emit("groupCall", { type: "CALL_STARTED", message: "Call is being started" });
    }
    SessionSDP(res, instance) {
        instance.emit("error", { type: "PROCESS_ANSWER", message: "Unable to process remote SDP." });
    }
    OnAddCandidate(error, instance) {
        instance.emit("error", { type: "CALL_ADDCANDIDATE", message: "Unable to add ice candidate." });
    }
    OnOfferIncomingCall(error, instance) {
        instance.emit("error", { type: "CALL_OFFERGENERATING", message: "Unable to add generate incoming call offer." });
    }
    OnRTCPeer(error, instance) {
        instance.emit("error", { type: "CALL_RTCPEER", message: "Unable to add to create webrtc peer." + error });
    }
    SessionEnd(res, instance) {
        let session = CommonHelper_1.GetKeyByValue(instance.UUIDSessions, res.sessionUUID);
        let callType = (res["call_type"] != undefined) ? res["call_type"] : "one_to_one";
        if (res["responseCode"] != undefined && res["responseCode"] == 487) {
            instance.emit("call", { type: "MISSED_CALL", message: "Session canceled/Missed Call", from: session, call_type: res.media_type, session: callType });
        }
        else {
            instance.emit("call", { type: "CALL_ENDED", message: "Call is being ended", from: session, call_type: callType });
        }
    }
    SessionInvite(res, instance) {
        let session = CommonHelper_1.GetKeyByValue(instance.UUIDSessions, res.sessionUUID);
        //let callType=(res["call_type"]!=undefined)?res["call_type"]:"one_to_one";
        let callType = instance.UUIDSessionTypes[res.sessionUUID];
        if (res["responseCode"] != undefined) {
            switch (res.responseCode) {
                case 100:
                    instance.emit("call", { type: "TRYING", message: "Trying to find the receiver", to: instance.to, call_typ: callType });
                    break;
                case 180:
                    instance.emit("call", { type: "CONNECTING", message: "Trying to connect the receiver", to: instance.to, call_typ: callType });
                    break;
                case 183:
                    instance.emit("call", { type: "ALERTING", message: "Alerting the receiver", to: instance.to, call_typ: callType });
                    break;
                case 200:
                    if (res.responseMessage == "no session exist against this URL") {
                        instance.emit("call", { type: "SESSION_END", message: "No Session exist or Call ended.", to: instance.to, call_typ: callType });
                    }
                    else {
                        instance.emit("call", { type: "CALL_ACCEPTED", message: "Call is accepted by receiver", to: instance.to, call_typ: callType });
                    }
                    break;
                case 404:
                    if (callType == "one_to_one")
                        instance.DisposeWebrtc(true);
                    instance.emit("call", { type: "INVALID_TARGET", message: "Receiver is not found", to: instance.to, call_typ: callType });
                    break;
                default:
                    if (callType == "one_to_one")
                        instance.DisposeWebrtc(true);
                    instance.emit("call", { type: "CALL_REJECTED", message: "Receiver has rejected the call", to: instance.to, call_typ: callType });
            }
        }
    }
    SessionCancel(res, instance) {
        let session = CommonHelper_1.GetKeyByValue(instance.UUIDSessions, res.sessionUUID);
        let callType = instance.UUIDSessionTypes[res.sessionUUID];
        // let callType=(res["call_type"]!=undefined)?res["call_type"]:"one_to_one";
        // if(res["responseCode"]!=undefined && res["responseCode"]==487){       
        //     instance.emit("call",{type:"MISSED_CALL",message:"Session canceled/Missed Call",from:session,call_type:callType});
        // }
        // else{
        //     instance.emit("call",{type:"CALL_ENDED",message:"Call is being ended",from:session,call_type:callType});
        // }
        // //410
        // //if(callType=="one_to_one")
        // let flag=(callType=="one_to_one");
        // instance.DisposeWebrtc(flag);
        if (res["responseCode"] != undefined) {
            switch (res.responseCode) {
                case 487:
                    instance.emit("call", { type: "MISSED_CALL", message: "Session canceled/Missed Call", from: session, call_type: callType });
                    break;
                case 410:
                    instance.emit("call", { type: "PARTICIPANT_LEFT", message: "Participant has left the call", from: res.referenceID, call_typ: callType });
                    break;
                default:
                    // if(callType=="one_to_one")
                    instance.DisposeWebrtc(false);
                    instance.emit("call", { type: "CALL_ENDED", message: "Call is being ended", to: instance.to, call_typ: callType });
            }
        }
    }
    SetCallerStatus(res, instance) {
        instance.emit("call", {
            type: "CALL_STATUS",
            message: "Call Status",
            video_status: res.videoInformation,
            audio_status: res.audioInformation
        });
    }
    PublicURL(res, instance) {
        instance.emit("call", { type: "PUBLIC_URL", message: "Call is being ended", url: res.url });
    }
    /**
     *
     * MANY TO MANY EVENTS
     *
     */
    SetExistingParticipants(res, instance) {
        instance.emit("groupCall", { type: "PARTICIPANT_LIST", message: "Participant List is available", participant_list: res.referenceIDs });
    }
    SetParticipantStatus(res, instance) {
        instance.emit("groupCall", {
            type: "PARTICIPANT_STATUS",
            message: "Participant Status",
            participant: res.referenceID,
            video_status: res.videoInformation,
            audio_status: res.audioInformation
        });
    }
}
const EventHandler = new EventHandlerService();
exports.default = EventHandler;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidGenerator = exports.SetPlaysInline = exports.IsDOM = exports.GetKeyByValue = void 0;
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-explicit-any */
function GetKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
exports.GetKeyByValue = GetKeyByValue;
function IsDOM(Obj) {
    return Obj instanceof Element;
}
exports.IsDOM = IsDOM;
function SetPlaysInline(element) {
    if (IsDOM(element))
        element.setAttribute('playsinline', true);
}
exports.SetPlaysInline = SetPlaysInline;
function UuidGenerator() {
    var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
    do {
        var ascicode = Math.floor((Math.random() * 42) + 48);
        if (ascicode < 58 || ascicode > 64) {
            idstr += String.fromCharCode(ascicode);
        }
    } while (idstr.length < 32);
    return (idstr);
}
exports.UuidGenerator = UuidGenerator;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __webpack_require__(7);
class AuthService {
    constructor() { }
    /////////////////////////////////////
    ///////// Authentication with server
    async Authorization(cId, cSec) {
        let clientData = {
            project_id: cId,
            auth_token: cSec
        };
        // console.log("====clientData====",clientData);
        return fetch(`${Constants_1.SERVER}/AuthenticateSDK`, {
            method: 'POST',
            body: JSON.stringify(clientData),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        })
            .then((data) => data.json())
            .then((resp) => {
            return resp;
        })
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
}
const Auth = new AuthService();
exports.default = Auth;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER = void 0;
exports.SERVER = "https://vtkapi.vdotok.dev/API/v0";


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RegisterSchema_1 = __webpack_require__(9);
class RegisterModel {
    constructor() {
        this.RegPacket = RegisterSchema_1.default;
    }
    set id(id) {
        this.RegPacket.id = id;
    }
    get id() {
        return this.RegPacket.id;
    }
    set type(type) {
        this.RegPacket.type = type;
    }
    get type() {
        return this.RegPacket.type;
    }
    set requestType(requestType) {
        this.RegPacket.requestType = requestType;
    }
    get requestType() {
        return this.RegPacket.requestType;
    }
    set requestID(requestID) {
        this.RegPacket.requestID = requestID;
    }
    get requestID() {
        return this.RegPacket.requestID;
    }
    set tenantID(tenantID) {
        this.RegPacket.tenantID = tenantID;
    }
    get tenantID() {
        return this.RegPacket.tenantID;
    }
    set projectID(tenantID) {
        this.RegPacket.projectID = tenantID;
    }
    get projectID() {
        return this.RegPacket.projectID;
    }
    set referenceID(referenceID) {
        this.RegPacket.referenceID = referenceID;
    }
    get referenceID() {
        return this.RegPacket.referenceID;
    }
    set authorizationToken(authorizationToken) {
        this.RegPacket.authorizationToken = authorizationToken;
    }
    get authorizationToken() {
        return this.RegPacket.authorizationToken;
    }
    set socketType(socketType) {
        this.RegPacket.socketType = socketType;
    }
    get socketType() {
        return this.RegPacket.socketType;
    }
    /**
     * name
     */
    SendRegisterRequest(server) {
        const regMessage = JSON.stringify(this.RegPacket);
        console.log("Send===RegisterRequest", regMessage);
        server.send(regMessage);
    }
}
exports.default = RegisterModel;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // "id":"register",
    // "name":"client2",
    "requestType": "register",
    "type": "request",
    "requestID": "YX9BLHSS0WLCI6ESCS2D29T5UW2YFJSY",
    "tenantID": "12345",
    "projectID": "23456",
    "referenceID": "0d00e363ef75c8cc76d1ee79e950b30c",
    "authorizationToken": "e2a10ce93bb2affbe767e843c0bfc76c",
    "socketType": 0
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *
 * @RegisterEventHandlerService is the class used for handling register events
 *
 */
class RegisterEventHandlerService {
    constructor() { }
    SetRegisterResponse(resMessage, instance) {
        switch (resMessage.responseCode) {
            case 200:
                instance.McToken = resMessage.mcToken;
                instance.emit("register", { type: "Success", message: "You are registered successfully with vidtok server." });
                break;
            default:
                instance.emit("error", { type: "Register", message: "You are not registered with vidtok server." + resMessage.responseMessage });
        }
    }
}
const RegisterEventHandler = new RegisterEventHandlerService();
exports.default = RegisterEventHandler;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable prettier/prettier */
const CallRequestSchema_1 = __webpack_require__(12);
class CallRequestModel {
    constructor() {
        this.ReqPacket = CallRequestSchema_1.default;
    }
    // set id(id:any){
    // this.ReqPacket.id=id;
    //         }
    // get id(){
    //     return this.ReqPacket.id;
    //         }
    set from(from) {
        this.ReqPacket.from = from;
    }
    get from() {
        return this.ReqPacket.from;
    }
    set to(to) {
        this.ReqPacket.to = to;
    }
    get to() {
        return this.ReqPacket.to;
    }
    set type(type) {
        this.ReqPacket.type = type;
    }
    get type() {
        return this.ReqPacket.type;
    }
    set requestType(requestType) {
        this.ReqPacket.requestType = requestType;
    }
    get requestType() {
        return this.ReqPacket.requestType;
    }
    set session_type(session_type) {
        this.ReqPacket.session_type = session_type;
    }
    get session_type() {
        return this.ReqPacket.session_type;
    }
    set requestID(requestID) {
        this.ReqPacket.requestID = requestID;
    }
    get requestID() {
        return this.ReqPacket.requestID;
    }
    set sessionUUID(sessionUUID) {
        this.ReqPacket.sessionUUID = sessionUUID;
    }
    get sessionUUID() {
        return this.ReqPacket.sessionUUID;
    }
    set mcToken(mcToken) {
        this.ReqPacket.mcToken = mcToken;
    }
    get mcToken() {
        return this.ReqPacket.mcToken;
    }
    set sdpOffer(sdpOffer) {
        this.ReqPacket.sdpOffer = sdpOffer;
    }
    get sdpOffer() {
        return this.ReqPacket.sdpOffer;
    }
    set call_type(type) {
        this.ReqPacket.call_type = type;
    }
    get call_type() {
        return this.ReqPacket.call_type;
    }
    set data(type) {
        this.ReqPacket.data = type;
    }
    get data() {
        return this.ReqPacket.data;
    }
    set media_type(media_type) {
        this.ReqPacket.media_type = media_type;
    }
    get media_type() {
        return this.ReqPacket.media_type;
    }
    custon_field(field, value) {
        this.ReqPacket[field] = value;
    }
    /**
     * @method for sending a call request
     */
    SendCallRequest(server) {
        let reqMessage = JSON.stringify(this.ReqPacket);
        console.log("Send===CallRequest", reqMessage);
        server.send(reqMessage);
    }
}
exports.default = CallRequestModel;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    //"id":"call",
    "from": "User-A",
    "to": "User-B",
    "type": "request",
    "requestType": "session_invite",
    "session_type": "call",
    "call_type": "one_to_one",
    "media_type": "video",
    "requestID": "UUID",
    "sessionUUID": "sgdjkfgskjdgfs6876868",
    "mcToken": "",
    "sdpOffer": "",
    "data": {}
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const Auth_1 = __webpack_require__(6);
// register model for registering
const RegisterModel_1 = __webpack_require__(8);
// register event handler
const RegisterEventHandler_1 = __webpack_require__(10);
//call model for initiating a call
const CallRequestModel_1 = __webpack_require__(11);
const CommonHelper_1 = __webpack_require__(5);
const vidWebRTC = __webpack_require__(14);
class ManyToManyClass extends events_1.EventEmitter {
    constructor(instance) {
        super();
        this.UUIDSessions = {};
        this.UUIDSessionTypes = {};
        this.UUIDSessionMediaTypes = {};
        this.participants = {};
        this.participantVideo = {};
        this.callSession = "";
        this.participatArray = [];
        this.mediaType = "";
        this.instance = {};
        this.mcToken = instance.mcToken;
        this.currentUser = instance.currentUser;
        this.instance = instance;
        this.ws = instance.ws;
        // this.Authentication(_Credentials);
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        console.log("====DER===", credentials, this.projectID, this.projectSecret, this.clientToken);
        //this.Connect('wss://cpaas-url-based-demo.vdotok.com:8443/call')
        // this.Connect('wss://kurento3.togee.io:8443/call');
        Auth_1.default.Authorization(credentials.projectID, credentials.secret).then((response) => {
            console.log("===Authorization-outer===", response);
            if (response && response.status == 200) {
                let host = `${response.media_server_map.protocol}://${response.media_server_map.host}:${response.media_server_map.port}/${response.media_server_map.end_point}`;
                this.Connect(host);
                console.log("===Authorization===", response);
            }
            else
                EventHandler_1.default.OnAuthError(response.message, this);
        });
    }
    Connect(mediaServer) {
        var webSocketConnetion = new WebSocket(mediaServer);
        webSocketConnetion.onmessage = (message) => {
            var messageData = JSON.parse(message.data);
            console.log('Received message: ', messageData);
            switch (messageData.requestType) {
                case 'register':
                    RegisterEventHandler_1.default.SetRegisterResponse(messageData, this);
                    break;
                case 'callResponse':
                    console.log(' CallResponse: ', messageData);
                    this.CallResponse(messageData);
                    break;
                case 'incomingCall':
                    this.callSession = messageData.sessionUUID;
                    this.mediaType = messageData.media_type;
                    console.log('incomingCall case: ', message);
                    EventHandler_1.default.OnIncomingGroupCall(messageData, this);
                    // this.incomingCall(messageData);
                    break;
                case 'startCommunication':
                    this.SessionStart(messageData);
                    break;
                case 'stopCommunication':
                    console.info('Communication ended by remote peer', messageData);
                    //EventHandler.SessionEnd(messageData,this);
                    // this.DisposeWebrtc(true);
                    break;
                case 'iceCandidate':
                    this.AddCandidate(messageData);
                    break;
                case 'session_invite':
                    //EventHandler.SessionInvite(messageData,this);
                    break;
                case 'session_cancel':
                    this.OnSessionCancel(messageData);
                    console.log("===onParticipantOffer== exiting session_cancel", messageData, new Date().toLocaleTimeString());
                    //EventHandler.SessionCancel(messageData,this);
                    break;
                /////////////////////////////////////////////
                /////////  many to many events
                case 'existing_participants':
                    console.log("===onParticipantOffer== exiting", messageData, new Date().toLocaleTimeString());
                    this.OnExistingParticipants(messageData);
                    //EventHandler.SetExistingParticipants(messageData,this);
                    break;
                case 'new_participant_arrived':
                    console.log("===onParticipantOffer== exiting new", messageData, new Date().toLocaleTimeString());
                    this.OnNewParticipant(messageData);
                    break;
                case 'participantLeft':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    this.OnParticipantLeft(messageData);
                    break;
                case 'state_information':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    EventHandler_1.default.SetParticipantStatus(messageData, this);
                    break;
                //EventHandler.SetExistingParticipants(messageData,this);
                ////////   end many to many events
                ////////////////////////////////////////////
                //this.DisposeWebrtc(true);
                default:
                // console.error('Unrecognized message', messageData);
            }
        };
        webSocketConnetion.onclose = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnClose socket==", res);
        };
        webSocketConnetion.onopen = (res) => {
            EventHandler_1.default.OnConnection(res, this);
            console.log("OnOpen socket==", res);
        };
        //   webSocketConnetion.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        webSocketConnetion.onerror = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
        };
        this.ws = webSocketConnetion;
    }
    SetParticipantStatus(messageData) {
        EventHandler_1.default.SetParticipantStatus(messageData, this.instance);
    }
    AddCandidate(message) {
        console.log("Add Ice Candidate::::", message, this.participants[message.referenceID]);
        this.participants[message.referenceID].addIceCandidate(message.candidate, (error) => {
            if (error) {
                EventHandler_1.default.OnAddCandidate(error, this.instance);
                return console.error('Error adding candidate: ' + error);
            }
        });
    }
    OnExistingParticipants(response) {
        let refIDs = response.referenceIDs;
        let participantList = refIDs;
        refIDs.forEach((ref) => {
            if (ref != undefined) {
                // this.participatArray.push(ref);
                // let video=this.ExistingParticipant(ref);
                // participantList.push({referenceID:ref,stream:video.srcObject});
                this.instance.emit("groupCall", { type: "NEW_PARTICIPANT", message: "New participant arrived.", participant: ref });
            }
        });
        //	this.instance.emit("groupCall",{type:"PARTICIPANT_LIST",message:"Participant List is available",participant_list:participantList});
    }
    OnSessionCancel(response) {
        let refID = response.referenceID;
        this.instance.emit("groupCall", { type: "PARTICIPANT_LEFT", message: "Participant left.", participant: refID });
        var participant = this.participants[refID];
        this.participatArray.splice(this.participatArray.indexOf(refID), 1);
        if (participant && participant != undefined) {
            participant.dispose();
        }
        delete this.participants[refID];
        delete this.participantVideo[refID];
    }
    OnNewParticipant(response) {
        let refID = response.referenceID;
        if (refID != undefined && this.participatArray.indexOf(refID) == -1) {
            //let video=this.ExistingParticipant(refID);
            this.instance.emit("groupCall", { type: "NEW_PARTICIPANT", message: "New participant arrived.", participant: refID });
        }
    }
    OnParticipantLeft(response) {
        let refID = response.referenceID;
        this.instance.emit("groupCall", { type: "PARTICIPANT_LEFT", message: "Participant left.", participant: refID });
        // var participant = this.participants[refID];
        // this.participatArray.splice(this.participatArray.indexOf(refID),1);
        // //participant.dispose();
        // delete this.participants[refID];
        // delete this.participantVideo[refID];
    }
    SetParticipantVideo(refId, partiVideo) {
        CommonHelper_1.SetPlaysInline(partiVideo);
        let options = {
            remoteVideo: partiVideo,
            onicecandidate: (candidate) => {
                this.OnParticipantIceCandidate(candidate, refId);
            },
            onerror: this.onError
        };
        let rtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            rtcPeer.generateOffer((error, offerSdp) => {
                this.onParticipantOffer(error, offerSdp, refId);
            });
        });
        this.participants[refId] = rtcPeer;
        this.participantVideo[refId] = partiVideo;
        return partiVideo;
    }
    CallResponse(message) {
        console.info('CallResponse', this.participants[message.referenceID], message);
        if (message.response == 'accepted') {
            this.participants[message.referenceID].processAnswer(message.sdpAnswer, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
        }
    }
    SessionStart(message) {
        EventHandler_1.default.GroupSessionStart(message, this.instance);
        console.log("Start=Commm", message.referenceID, message.referenceID, this.participants[message.referenceID]);
        this.participants[message.referenceID].processAnswer(message.sdpAnswer, (error) => {
            if (error) {
                EventHandler_1.default.SessionSDP(error, this);
                return console.error(error);
            }
        });
    }
    onOfferIncomingCall(error, offerSdp, from) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        let response = {
            "type": "request",
            "requestType": "session_invite",
            "sdpOffer": offerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.callSession,
            /////// new change
            "referenceID": this.currentUser,
            ///////////////////////////////////
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
    }
    OnOfferManytoManyCall(error, offerSdp, from) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        let response = {
            "type": "request",
            "requestType": "session_invite",
            "sdpOffer": offerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.callSession,
            /////// new change
            "referenceID": this.currentUser,
            ///////////////////////////////////
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
    }
    /*************
     * Register user to SDK
     */
    Register(referenceID, authorizationToken) {
        this.currentUser = referenceID;
        let regMessage = new RegisterModel_1.default();
        regMessage.requestID = new Date().getTime().toString();
        regMessage.tenantID = this.projectID;
        console.log("*register1" , this.projectID);
        regMessage.referenceID = referenceID;
        regMessage.authorizationToken = authorizationToken;
        regMessage.SendRegisterRequest(this.ws);
    }
    GroupCall(params) {
        this.mediaType = params.call_type;
        this.to = Array.isArray(params.to) ? params.to : [params.to];
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        this.instance.to = this.to;
        CommonHelper_1.SetPlaysInline(this.localVideo);
        let constraints = {
            audio: true,
            video: params.call_type != "audio"
            // video: {
            //     mandatory: {
            //         maxWidth: 320,
            //         maxFrameRate: 15,
            //         minFrameRate: 15
            //     }
            // }
        };
        var options = {
            mediaConstraints: constraints,
            localVideo: params.localVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        let webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            webRtcPeer.generateOffer((error, offerSdp) => {
                this.onManyToManyOfferCall(error, offerSdp, params.call_type);
            });
        });
        this.participants[this.currentUser] = webRtcPeer;
    }
    JoinGroupCall(params, callSession) {
        this.mediaType = params.call_type;
        this.localVideo = params.localVideo;
        this.callSession = callSession;
        CommonHelper_1.SetPlaysInline(this.localVideo);
        let constraints = {
            audio: true,
            video: params.call_type != "audio"
            // video: {
            //     mandatory: {
            //         maxWidth: 320,
            //         maxFrameRate: 15,
            //         minFrameRate: 15
            //     }
            // }
        };
        var options = {
            mediaConstraints: constraints,
            localVideo: params.localVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        let webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            webRtcPeer.generateOffer((error, offerSdp) => {
                console.log("======here===it goes inner sess", this.callSession);
                this.onJoinManyToManyOfferCall(error, offerSdp, params.call_type);
            });
            console.log("======here===it goes");
        });
        this.participants[this.currentUser] = webRtcPeer;
    }
    /*************
     *
     * Call one to many Broadcasting
     *
     */
    //public CallOneToMany(params:any) {
    Broadcasting(params) {
        this.to = params.to;
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        var options = {
            localVideo: params.localVideo,
            //remoteVideo : params.remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferOneToManyCall(error, offerSdp);
            });
        });
    }
    onOfferOneToManyCall(error, offerSdp) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_many";
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.call_type = "one_to_many";
        callRequest.SendCallRequest(this.ws);
    }
    AcceptBroadcast(remoteVideo) {
        let from = this.currentFromUser;
        var options = {
            remoteVideo: remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, from);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferIncomingCall(error, offerSdp, from);
            });
        });
    }
    /*********************************************************
     *
     * End Call One To Many Type
     *
     *
     *********************************************************/
    /**
     *
     * @param error
     * @param offerSdp
     * @returns
     */
    onOfferCall(error, offerSdp, media_type) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.media_type = media_type;
        callRequest.SendCallRequest(this.ws);
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_one";
        console.log(' OnOfferCall :: :: ::', media_type);
        // var message = {
        // 	id : 'call',
        // 	from : this.currentUser,
        // 	to : this.to,
        // 	sdpOffer : offerSdp
        // };
        // console.log('Invoking SDP Message',message);
        // this.SendPacket(message);
    }
    /*********************************************************
     *
     *  Many One To Many Offer
     *
     *
     *********************************************************/
    /**
     *
     * @param error
     * @param offerSdp
     * @returns
     */
    onManyToManyOfferCall(error, offerSdp, media_type) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        this.callSession = uUID;
        this.instance.callSession = uUID;
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.media_type = media_type;
        callRequest.call_type = "many_to_many";
        callRequest.SendCallRequest(this.ws);
        console.log(' OnOfferCall :: :: ::', media_type);
    }
    onJoinManyToManyOfferCall(error, offerSdp, media_type) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        console.log("======here===it goes inner", media_type);
        let uUID = new Date().getTime().toString();
        let sessionUUID = this.callSession;
        console.log("======here===it goes sess", sessionUUID);
        var message = {
            from: this.currentUser,
            sdpOffer: offerSdp,
            // Custom Attributes
            responseCode: 200,
            responseMessage: "accepted",
            requestType: "session_invite",
            type: "request",
            session_type: "call",
            call_type: "many_to_many",
            media_type: media_type,
            requestID: uUID,
            sessionUUID: this.callSession,
            mcToken: this.mcToken
        };
        this.SendPacket(message);
    }
    onParticipantOffer(error, offerSdp, to) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        var message = {
            from: this.currentUser,
            to: to,
            requestType: "to_receive_stream",
            sdpOffer: offerSdp,
            requestID: uUID,
            type: "request",
            sessionUUID: this.callSession,
            mcToken: this.McToken
        };
        console.log("===onParticipantOffer==", message);
        this.SendPacket(message);
    }
    DisposeWebrtc(status) {
        for (var p in this.participants) {
            let partiRTC = this.participants[p];
            if (partiRTC && partiRTC != undefined) {
                partiRTC.dispose();
            }
        }
        this.participants = {};
        this.participantVideo = {};
        this.callSession = "";
        this.participatArray = [];
    }
    onError(error) {
        EventHandler_1.default.OnRTCPeer(error, this);
    }
    onIceCandidate(candidate, referenceID) {
        console.log("Local candidate" + JSON.stringify(candidate));
        var message = {
            requestType: 'onIceCandidate',
            candidate: candidate,
            referenceID: referenceID,
            sessionUUID: this.callSession
        };
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * EndCall
     */
    /***
     *
     * On Participant IceCandidate
     *
     */
    OnParticipantIceCandidate(candidate, ref) {
        var message = {
            requestType: 'onIceCandidate',
            candidate: candidate,
            referenceID: ref,
            sessionUUID: this.callSession
        };
        this.SendPacket(message);
    }
    SetMicMute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video") ? 1 : 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": 0,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = false;
            if (this.localVideo.localName == "audio")
                this.localVideo.audioTracks[0].enabled = false;
        }
    }
    /**
     * SetMicMute
     */
    SetMicUnmute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video") ? 1 : 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": 1,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = true;
            if (this.localVideo.localName == "audio")
                this.localVideo.audioTracks[0].enabled = true;
        }
    }
    /**
     * SetCameraOn
     */
    SetCameraOn() {
        if (this.localVideo && this.localVideo != undefined) {
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": 1,
                "videoInformation": 1
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = true;
        }
    }
    /**
     * SetCameraOff
     */
    SetCameraOff() {
        if (this.localVideo && this.localVideo != undefined) {
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": 1,
                "videoInformation": 0
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = false;
        }
    }
    LeaveGroupCall() {
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.callSession,
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    CancelCall() {
        let from = this.currentFromUser;
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
}
exports.default = ManyToManyClass;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * (C) Copyright 2014 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * This module contains a set of reusable components that have been found useful
 * during the development of the WebRTC applications with Kurento.
 * 
 * @module kurentoUtils
 * 
 * @copyright 2014 Kurento (http://kurento.org/)
 * @license ALv2
 */

var WebRtcPeer = __webpack_require__(15);

exports.WebRtcPeer = WebRtcPeer;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * (C) Copyright 2014-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var freeice = __webpack_require__(16)
var inherits = __webpack_require__(20)
var UAParser = __webpack_require__(21)
var uuidv4 = __webpack_require__(22)
var hark = __webpack_require__(25)

var EventEmitter = __webpack_require__(3).EventEmitter
var recursive = __webpack_require__(27).recursive.bind(undefined, true)
var sdpTranslator = __webpack_require__(29)
var logger = (typeof window === 'undefined') ? console : window.Logger ||
  console

try {
  __webpack_require__(37)
} catch (error) {
  if (typeof getScreenConstraints === 'undefined') {
    logger.warn('screen sharing is not available')

    getScreenConstraints = function getScreenConstraints(sendSource, callback) {
      callback(new Error("This library is not enabled for screen sharing"))
    }
  }
}

var MEDIA_CONSTRAINTS = {
  audio: true,
  video: {
    width: 640,
    framerate: 15
  }
}

// Somehow, the UAParser constructor gets an empty window object.
// We need to pass the user agent string in order to get information
var ua = (typeof window !== 'undefined' && window.navigator) ? window.navigator
  .userAgent : ''
var parser = new UAParser(ua)
var browser = parser.getBrowser()

function insertScriptSrcInHtmlDom(scriptSrc) {
  //Create a script tag
  var script = document.createElement('script');
  // Assign a URL to the script element
  script.src = scriptSrc;
  // Get the first script tag on the page (we'll insert our new one before it)
  var ref = document.querySelector('script');
  // Insert the new node before the reference node
  ref.parentNode.insertBefore(script, ref);
}

function importScriptsDependsOnBrowser() {
  if (browser.name === 'IE') {
    insertScriptSrcInHtmlDom(
      "https://cdn.temasys.io/adapterjs/0.15.x/adapter.debug.js");
  }
}

importScriptsDependsOnBrowser();
var usePlanB = false
if (browser.name === 'Chrome' || browser.name === 'Chromium') {
  logger.debug(browser.name + ": using SDP PlanB")
  usePlanB = true
}

function noop(error) {
  if (error) logger.error(error)
}

function trackStop(track) {
  track.stop && track.stop()
}

function streamStop(stream) {
  stream.getTracks().forEach(trackStop)
}

/**
 * Returns a string representation of a SessionDescription object.
 */
var dumpSDP = function (description) {
  if (typeof description === 'undefined' || description === null) {
    return ''
  }

  return 'type: ' + description.type + '\r\n' + description.sdp
}

function bufferizeCandidates(pc, onerror) {
  var candidatesQueue = []

  function setSignalingstatechangeAccordingWwebBrowser(functionToExecute, pc) {
    if (typeof AdapterJS !== 'undefined' && AdapterJS.webrtcDetectedBrowser ===
      'IE' && AdapterJS.webrtcDetectedVersion >= 9) {
      pc.onsignalingstatechange = functionToExecute;
    } else {
      pc.addEventListener('signalingstatechange', functionToExecute);
    }

  }

  var signalingstatechangeFunction = function () {
    if (pc.signalingState === 'stable') {
      while (candidatesQueue.length) {
        var entry = candidatesQueue.shift();
        pc.addIceCandidate(entry.candidate, entry.callback, entry.callback);
      }
    }
  };

  setSignalingstatechangeAccordingWwebBrowser(signalingstatechangeFunction, pc);
  return function (candidate, callback) {
    callback = callback || onerror;
    switch (pc.signalingState) {
    case 'closed':
      callback(new Error('PeerConnection object is closed'));
      break;
    case 'stable':
      if (pc.remoteDescription) {
        pc.addIceCandidate(candidate, callback, callback);
        break;

      }
      default:
        candidatesQueue.push({
          candidate: candidate,
          callback: callback

        });
    }
  };
}

/* Simulcast utilities */

function removeFIDFromOffer(sdp) {
  var n = sdp.indexOf("a=ssrc-group:FID");

  if (n > 0) {
    return sdp.slice(0, n);
  } else {
    return sdp;
  }
}

function getSimulcastInfo(videoStream) {
  var videoTracks = videoStream.getVideoTracks();
  if (!videoTracks.length) {
    logger.warn('No video tracks available in the video stream')
    return ''
  }
  var lines = [
    'a=x-google-flag:conference',
    'a=ssrc-group:SIM 1 2 3',
    'a=ssrc:1 cname:localVideo',
    'a=ssrc:1 msid:' + videoStream.id + ' ' + videoTracks[0].id,
    'a=ssrc:1 mslabel:' + videoStream.id,
    'a=ssrc:1 label:' + videoTracks[0].id,
    'a=ssrc:2 cname:localVideo',
    'a=ssrc:2 msid:' + videoStream.id + ' ' + videoTracks[0].id,
    'a=ssrc:2 mslabel:' + videoStream.id,
    'a=ssrc:2 label:' + videoTracks[0].id,
    'a=ssrc:3 cname:localVideo',
    'a=ssrc:3 msid:' + videoStream.id + ' ' + videoTracks[0].id,
    'a=ssrc:3 mslabel:' + videoStream.id,
    'a=ssrc:3 label:' + videoTracks[0].id
  ];

  lines.push('');

  return lines.join('\n');
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function setIceCandidateAccordingWebBrowser(functionToExecute, pc) {
  if (typeof AdapterJS !== 'undefined' && AdapterJS.webrtcDetectedBrowser ===
    'IE' && AdapterJS.webrtcDetectedVersion >= 9) {
    pc.onicecandidate = functionToExecute;
  } else {
    pc.addEventListener('icecandidate', functionToExecute);
  }

}

/**
 * Wrapper object of an RTCPeerConnection. This object is aimed to simplify the
 * development of WebRTC-based applications.
 *
 * @constructor module:kurentoUtils.WebRtcPeer
 *
 * @param {String} mode Mode in which the PeerConnection will be configured.
 *  Valid values are: 'recvonly', 'sendonly', and 'sendrecv'
 * @param localVideo Video tag for the local stream
 * @param remoteVideo Video tag for the remote stream
 * @param {MediaStream} videoStream Stream to be used as primary source
 *  (typically video and audio, or only video if combined with audioStream) for
 *  localVideo and to be added as stream to the RTCPeerConnection
 * @param {MediaStream} audioStream Stream to be used as second source
 *  (typically for audio) for localVideo and to be added as stream to the
 *  RTCPeerConnection
 */
function WebRtcPeer(mode, options, callback) {
  if (!(this instanceof WebRtcPeer)) {
    return new WebRtcPeer(mode, options, callback)
  }

  WebRtcPeer.super_.call(this)

  if (options instanceof Function) {
    callback = options
    options = undefined
  }

  options = options || {}
  callback = (callback || noop).bind(this)

  var self = this
  var localVideo = options.localVideo
  var remoteVideo = options.remoteVideo
  var videoStream = options.videoStream
  var audioStream = options.audioStream
  var mediaConstraints = options.mediaConstraints

  var pc = options.peerConnection
  var sendSource = options.sendSource || 'webcam'

  var dataChannelConfig = options.dataChannelConfig
  var useDataChannels = options.dataChannels || false
  var dataChannel

  var guid = uuidv4()
  var configuration = recursive({
      iceServers: freeice()
    },
    options.configuration)

  var onicecandidate = options.onicecandidate
  if (onicecandidate) this.on('icecandidate', onicecandidate)

  var oncandidategatheringdone = options.oncandidategatheringdone
  if (oncandidategatheringdone) {
    this.on('candidategatheringdone', oncandidategatheringdone)
  }

  var simulcast = options.simulcast
  var multistream = options.multistream
  var interop = new sdpTranslator.Interop()
  var candidatesQueueOut = []
  var candidategatheringdone = false

  Object.defineProperties(this, {
    'peerConnection': {
      get: function () {
        return pc
      }
    },

    'id': {
      value: options.id || guid,
      writable: false
    },

    'remoteVideo': {
      get: function () {
        return remoteVideo
      }
    },

    'localVideo': {
      get: function () {
        return localVideo
      }
    },

    'dataChannel': {
      get: function () {
        return dataChannel
      }
    },

    /**
     * @member {(external:ImageData|undefined)} currentFrame
     */
    'currentFrame': {
      get: function () {
        // [ToDo] Find solution when we have a remote stream but we didn't set
        // a remoteVideo tag
        if (!remoteVideo) return;

        if (remoteVideo.readyState < remoteVideo.HAVE_CURRENT_DATA)
          throw new Error('No video stream data available')

        var canvas = document.createElement('canvas')
        canvas.width = remoteVideo.videoWidth
        canvas.height = remoteVideo.videoHeight

        canvas.getContext('2d').drawImage(remoteVideo, 0, 0)

        return canvas
      }
    }
  })

  // Init PeerConnection
  if (!pc) {
    pc = new RTCPeerConnection(configuration);
    if (useDataChannels && !dataChannel) {
      var dcId = 'WebRtcPeer-' + self.id
      var dcOptions = undefined
      if (dataChannelConfig) {
        dcId = dataChannelConfig.id || dcId
        dcOptions = dataChannelConfig.options
      }
      dataChannel = pc.createDataChannel(dcId, dcOptions);
      if (dataChannelConfig) {
        dataChannel.onopen = dataChannelConfig.onopen;
        dataChannel.onclose = dataChannelConfig.onclose;
        dataChannel.onmessage = dataChannelConfig.onmessage;
        dataChannel.onbufferedamountlow = dataChannelConfig.onbufferedamountlow;
        dataChannel.onerror = dataChannelConfig.onerror || noop;
      }
    }
  }

  // Shims over the now deprecated getLocalStreams() and getRemoteStreams()
  // (usage of these methods should be dropped altogether)
  if (!pc.getLocalStreams && pc.getSenders) {
    pc.getLocalStreams = function () {
      var stream = new MediaStream();
      pc.getSenders().forEach(function (sender) {
        stream.addTrack(sender.track);
      });
      return [stream];
    };
  }
  if (!pc.getRemoteStreams && pc.getReceivers) {
    pc.getRemoteStreams = function () {
      var stream = new MediaStream();
      pc.getReceivers().forEach(function (sender) {
        stream.addTrack(sender.track);
      });
      return [stream];
    };
  }

  // If event.candidate == null, it means that candidate gathering has finished
  // and RTCPeerConnection.iceGatheringState == "complete".
  // Such candidate does not need to be sent to the remote peer.
  // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event#Indicating_that_ICE_gathering_is_complete
  var iceCandidateFunction = function (event) {
    var candidate = event.candidate;
    if (EventEmitter.listenerCount(self, 'icecandidate') || EventEmitter
      .listenerCount(self, 'candidategatheringdone')) {
      if (candidate) {
        var cand;
        if (multistream && usePlanB) {
          cand = interop.candidateToUnifiedPlan(candidate);
        } else {
          cand = candidate;
        }
        if (typeof AdapterJS === 'undefined') {
          self.emit('icecandidate', cand);

        }
        candidategatheringdone = false;
      } else if (!candidategatheringdone) {
        if (typeof AdapterJS !== 'undefined' && AdapterJS
          .webrtcDetectedBrowser === 'IE' && AdapterJS
          .webrtcDetectedVersion >= 9) {
          EventEmitter.prototype.emit('candidategatheringdone', cand);
        } else {
          self.emit('candidategatheringdone');
        }
        candidategatheringdone = true;
      }
    } else if (!candidategatheringdone) {
      candidatesQueueOut.push(candidate);
      if (!candidate)
        candidategatheringdone = true;

    }
  };

  setIceCandidateAccordingWebBrowser(iceCandidateFunction, pc);
  pc.onaddstream = options.onaddstream
  pc.onnegotiationneeded = options.onnegotiationneeded
  this.on('newListener', function (event, listener) {
    if (event === 'icecandidate' || event === 'candidategatheringdone') {
      while (candidatesQueueOut.length) {
        var candidate = candidatesQueueOut.shift()

        if (!candidate === (event === 'candidategatheringdone')) {
          listener(candidate)
        }
      }
    }
  })

  var addIceCandidate = bufferizeCandidates(pc)

  /**
   * Callback function invoked when an ICE candidate is received. Developers are
   * expected to invoke this function in order to complete the SDP negotiation.
   *
   * @function module:kurentoUtils.WebRtcPeer.prototype.addIceCandidate
   *
   * @param iceCandidate - Literal object with the ICE candidate description
   * @param callback - Called when the ICE candidate has been added.
   */
  this.addIceCandidate = function (iceCandidate, callback) {
    var candidate

    if (multistream && usePlanB) {
      candidate = interop.candidateToPlanB(iceCandidate)
    } else {
      candidate = new RTCIceCandidate(iceCandidate)
    }

    logger.debug('Remote ICE candidate received', iceCandidate)
    callback = (callback || noop).bind(this)
    addIceCandidate(candidate, callback)
  }

  this.generateOffer = function (callback) {
    callback = callback.bind(this)

    if (mode === 'recvonly') {
      /* Add reception tracks on the RTCPeerConnection. Send tracks are
       * unconditionally added to "sendonly" and "sendrecv" modes, in the
       * constructor's "start()" method, but nothing is done for "recvonly".
       *
       * Here, we add new transceivers to receive audio and/or video, so the
       * SDP Offer that will be generated by the PC includes these medias
       * with the "a=recvonly" attribute.
       */
      var useAudio =
        (mediaConstraints && typeof mediaConstraints.audio === 'boolean') ?
        mediaConstraints.audio : true
      var useVideo =
        (mediaConstraints && typeof mediaConstraints.video === 'boolean') ?
        mediaConstraints.video : true

      if (useAudio) {
        pc.addTransceiver('audio', {
          direction: 'recvonly'
        });
      }

      if (useVideo) {
        pc.addTransceiver('video', {
          direction: 'recvonly'
        });
      }
    } else if (mode === 'sendonly') {
      /* The constructor's "start()" method already added any available track,
       * which by default creates Transceiver with "sendrecv" direction.
       *
       * Here, we set all transceivers to only send audio and/or video, so the
       * SDP Offer that will be generated by the PC includes these medias
       * with the "a=sendonly" attribute.
       */
      pc.getTransceivers().forEach(function (transceiver) {
        transceiver.direction = "sendonly";
      });
    }

    if (typeof AdapterJS !== 'undefined' && AdapterJS
      .webrtcDetectedBrowser === 'IE' && AdapterJS.webrtcDetectedVersion >= 9
    ) {
      var setLocalDescriptionOnSuccess = function () {
        sleep(1000);
        var localDescription = pc.localDescription;
        logger.debug('Local description set\n', localDescription.sdp);
        if (multistream && usePlanB) {
          localDescription = interop.toUnifiedPlan(localDescription);
          logger.debug('offer::origPlanB->UnifiedPlan', dumpSDP(
            localDescription));
        }
        callback(null, localDescription.sdp, self.processAnswer.bind(self));
      };
      var createOfferOnSuccess = function (offer) {
        logger.debug('Created SDP offer');
        logger.debug('Local description set\n', pc.localDescription);
        pc.setLocalDescription(offer, setLocalDescriptionOnSuccess,
          callback);
      };
      pc.createOffer(createOfferOnSuccess, callback);
    } else {
      pc.createOffer()
        .then(function (offer) {
          logger.debug('Created SDP offer');
          offer = mangleSdpToAddSimulcast(offer);
          return pc.setLocalDescription(offer);
        })
        .then(function () {
          var localDescription = pc.localDescription;
          logger.debug('Local description set\n', localDescription.sdp);
          if (multistream && usePlanB) {
            localDescription = interop.toUnifiedPlan(localDescription);
            logger.debug('offer::origPlanB->UnifiedPlan', dumpSDP(
              localDescription));
          }
          callback(null, localDescription.sdp, self.processAnswer.bind(
            self));
        })
        .catch(callback);
    }
  }

  this.getLocalSessionDescriptor = function () {
    return pc.localDescription
  }

  this.getRemoteSessionDescriptor = function () {
    return pc.remoteDescription
  }

  function setRemoteVideo() {
    if (remoteVideo) {
      remoteVideo.pause()

      var stream = pc.getRemoteStreams()[0]
      remoteVideo.srcObject = stream
      logger.debug('Remote stream:', stream)

      if (typeof AdapterJS !== 'undefined' && AdapterJS
        .webrtcDetectedBrowser === 'IE' && AdapterJS.webrtcDetectedVersion >= 9
      ) {
        remoteVideo = attachMediaStream(remoteVideo, stream);
      } else {
        remoteVideo.load();
      }
    }
  }

  this.showLocalVideo = function () {
    localVideo.srcObject = videoStream
    localVideo.muted = true

    if (typeof AdapterJS !== 'undefined' && AdapterJS
      .webrtcDetectedBrowser === 'IE' && AdapterJS.webrtcDetectedVersion >= 9
    ) {
      localVideo = attachMediaStream(localVideo, videoStream);
    }
  };
  this.send = function (data) {
    if (dataChannel && dataChannel.readyState === 'open') {
      dataChannel.send(data)
    } else {
      logger.warn(
        'Trying to send data over a non-existing or closed data channel')
    }
  }

  /**
   * Callback function invoked when a SDP answer is received. Developers are
   * expected to invoke this function in order to complete the SDP negotiation.
   *
   * @function module:kurentoUtils.WebRtcPeer.prototype.processAnswer
   *
   * @param sdpAnswer - Description of sdpAnswer
   * @param callback -
   *            Invoked after the SDP answer is processed, or there is an error.
   */
  this.processAnswer = function (sdpAnswer, callback) {
    callback = (callback || noop).bind(this)

    var answer = new RTCSessionDescription({
      type: 'answer',
      sdp: sdpAnswer
    })

    if (multistream && usePlanB) {
      var planBAnswer = interop.toPlanB(answer)
      logger.debug('asnwer::planB', dumpSDP(planBAnswer))
      answer = planBAnswer
    }

    logger.debug('SDP answer received, setting remote description')

    if (pc.signalingState === 'closed') {
      return callback('PeerConnection is closed')
    }

    pc.setRemoteDescription(answer).then(function () {
        setRemoteVideo()

        callback()
      },
      callback)
  }

  /**
   * Callback function invoked when a SDP offer is received. Developers are
   * expected to invoke this function in order to complete the SDP negotiation.
   *
   * @function module:kurentoUtils.WebRtcPeer.prototype.processOffer
   *
   * @param sdpOffer - Description of sdpOffer
   * @param callback - Called when the remote description has been set
   *  successfully.
   */
  this.processOffer = function (sdpOffer, callback) {
    callback = callback.bind(this)

    var offer = new RTCSessionDescription({
      type: 'offer',
      sdp: sdpOffer
    })

    if (multistream && usePlanB) {
      var planBOffer = interop.toPlanB(offer)
      logger.debug('offer::planB', dumpSDP(planBOffer))
      offer = planBOffer
    }

    logger.debug('SDP offer received, setting remote description')

    if (pc.signalingState === 'closed') {
      return callback('PeerConnection is closed')
    }

    pc.setRemoteDescription(offer).then(function () {
      return setRemoteVideo()
    }).then(function () {
      return pc.createAnswer()
    }).then(function (answer) {
      answer = mangleSdpToAddSimulcast(answer)
      logger.debug('Created SDP answer')
      return pc.setLocalDescription(answer)
    }).then(function () {
      var localDescription = pc.localDescription
      if (multistream && usePlanB) {
        localDescription = interop.toUnifiedPlan(localDescription)
        logger.debug('answer::origPlanB->UnifiedPlan', dumpSDP(
          localDescription))
      }
      logger.debug('Local description set\n', localDescription.sdp)
      callback(null, localDescription.sdp)
    }).catch(callback)
  }

  function mangleSdpToAddSimulcast(answer) {
    if (simulcast) {
      if (browser.name === 'Chrome' || browser.name === 'Chromium') {
        logger.debug('Adding multicast info')
        answer = new RTCSessionDescription({
          'type': answer.type,
          'sdp': removeFIDFromOffer(answer.sdp) + getSimulcastInfo(
            videoStream)
        })
      } else {
        logger.warn('Simulcast is only available in Chrome browser.')
      }
    }

    return answer
  }

  /**
   * This function creates the RTCPeerConnection object taking into account the
   * properties received in the constructor. It starts the SDP negotiation
   * process: generates the SDP offer and invokes the onsdpoffer callback. This
   * callback is expected to send the SDP offer, in order to obtain an SDP
   * answer from another peer.
   */
  function start() {
    if (pc.signalingState === 'closed') {
      callback(
        'The peer connection object is in "closed" state. This is most likely due to an invocation of the dispose method before accepting in the dialogue'
      )
    }

    if (videoStream && localVideo) {
      self.showLocalVideo()
    }

    if (videoStream) {
      videoStream.getTracks().forEach(function (track) {
        pc.addTrack(track, videoStream);
      });
    }

    if (audioStream) {
      audioStream.getTracks().forEach(function (track) {
        pc.addTrack(track, audioStream);
      });
    }

    callback()
  }

  if (mode !== 'recvonly' && !videoStream && !audioStream) {
    function getMedia(constraints) {
      if (constraints === undefined) {
        constraints = MEDIA_CONSTRAINTS
      }
      if (typeof AdapterJS !== 'undefined' && AdapterJS
        .webrtcDetectedBrowser === 'IE' && AdapterJS.webrtcDetectedVersion >= 9
      ) {
        navigator.getUserMedia(constraints, function (stream) {
          videoStream = stream;
          start();
        }, callback);
      } else {
        navigator.mediaDevices.getUserMedia(constraints).then(function (
          stream) {
          videoStream = stream;

          start();
        }).catch(callback);
      }
    }
    if (sendSource === 'webcam') {
      getMedia(mediaConstraints)
    } else {
      getScreenConstraints(sendSource, function (error, constraints_) {
        if (error)
          return callback(error)

        constraints = [mediaConstraints]
        constraints.unshift(constraints_)
        getMedia(recursive.apply(undefined, constraints))
      }, guid)
    }
  } else {
    setTimeout(start, 0)
  }

  this.on('_dispose', function () {
    if (localVideo) {
      localVideo.pause();
      localVideo.srcObject = null;

      if (typeof AdapterJS === 'undefined') {
        localVideo.load();
      }
      localVideo.muted = false;

    }
    if (remoteVideo) {
      remoteVideo.pause();
      remoteVideo.srcObject = null;
      if (typeof AdapterJS === 'undefined') {
        remoteVideo.load();

      }
    }
    self.removeAllListeners();

    if (typeof window !== 'undefined' && window.cancelChooseDesktopMedia !==
      undefined) {
      window.cancelChooseDesktopMedia(guid)
    }
  })
}
inherits(WebRtcPeer, EventEmitter)

function createEnableDescriptor(type) {
  var method = 'get' + type + 'Tracks'

  return {
    enumerable: true,
    get: function () {
      // [ToDo] Should return undefined if not all tracks have the same value?

      if (!this.peerConnection) return

      var streams = this.peerConnection.getLocalStreams()
      if (!streams.length) return

      for (var i = 0, stream; stream = streams[i]; i++) {
        var tracks = stream[method]()
        for (var j = 0, track; track = tracks[j]; j++)
          if (!track.enabled) return false
      }

      return true
    },
    set: function (value) {
      function trackSetEnable(track) {
        track.enabled = value
      }

      this.peerConnection.getLocalStreams().forEach(function (stream) {
        stream[method]().forEach(trackSetEnable)
      })
    }
  }
}

Object.defineProperties(WebRtcPeer.prototype, {
  'enabled': {
    enumerable: true,
    get: function () {
      return this.audioEnabled && this.videoEnabled
    },
    set: function (value) {
      this.audioEnabled = this.videoEnabled = value
    }
  },
  'audioEnabled': createEnableDescriptor('Audio'),
  'videoEnabled': createEnableDescriptor('Video')
})

WebRtcPeer.prototype.getLocalStream = function (index) {
  if (this.peerConnection) {
    return this.peerConnection.getLocalStreams()[index || 0]
  }
}

WebRtcPeer.prototype.getRemoteStream = function (index) {
  if (this.peerConnection) {
    return this.peerConnection.getRemoteStreams()[index || 0]
  }
}

/**
 * @description This method frees the resources used by WebRtcPeer.
 *
 * @function module:kurentoUtils.WebRtcPeer.prototype.dispose
 */
WebRtcPeer.prototype.dispose = function () {
  logger.debug('Disposing WebRtcPeer')

  var pc = this.peerConnection
  var dc = this.dataChannel
  try {
    if (dc) {
      if (dc.readyState === 'closed') return

      dc.close()
    }

    if (pc) {
      if (pc.signalingState === 'closed') return

      pc.getLocalStreams().forEach(streamStop)

      // FIXME This is not yet implemented in firefox
      // if(videoStream) pc.removeStream(videoStream);
      // if(audioStream) pc.removeStream(audioStream);

      pc.close()
    }
  } catch (err) {
    logger.warn('Exception disposing webrtc peer ' + err)
  }

  if (typeof AdapterJS === 'undefined') {
    this.emit('_dispose');
  }

}

//
// Specialized child classes
//

function WebRtcPeerRecvonly(options, callback) {
  if (!(this instanceof WebRtcPeerRecvonly)) {
    return new WebRtcPeerRecvonly(options, callback)
  }

  WebRtcPeerRecvonly.super_.call(this, 'recvonly', options, callback)
}
inherits(WebRtcPeerRecvonly, WebRtcPeer)

function WebRtcPeerSendonly(options, callback) {
  if (!(this instanceof WebRtcPeerSendonly)) {
    return new WebRtcPeerSendonly(options, callback)
  }

  WebRtcPeerSendonly.super_.call(this, 'sendonly', options, callback)
}
inherits(WebRtcPeerSendonly, WebRtcPeer)

function WebRtcPeerSendrecv(options, callback) {
  if (!(this instanceof WebRtcPeerSendrecv)) {
    return new WebRtcPeerSendrecv(options, callback)
  }

  WebRtcPeerSendrecv.super_.call(this, 'sendrecv', options, callback)
}
inherits(WebRtcPeerSendrecv, WebRtcPeer)

function harkUtils(stream, options) {
  return hark(stream, options);
}

exports.bufferizeCandidates = bufferizeCandidates

exports.WebRtcPeerRecvonly = WebRtcPeerRecvonly
exports.WebRtcPeerSendonly = WebRtcPeerSendonly
exports.WebRtcPeerSendrecv = WebRtcPeerSendrecv
exports.hark = harkUtils


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node: true */


var normalice = __webpack_require__(17);

/**
  # freeice

  The `freeice` module is a simple way of getting random STUN or TURN server
  for your WebRTC application.  The list of servers (just STUN at this stage)
  were sourced from this [gist](https://gist.github.com/zziuni/3741933).

  ## Example Use

  The following demonstrates how you can use `freeice` with
  [rtc-quickconnect](https://github.com/rtc-io/rtc-quickconnect):

  <<< examples/quickconnect.js

  As the `freeice` module generates ice servers in a list compliant with the
  WebRTC spec you will be able to use it with raw `RTCPeerConnection`
  constructors and other WebRTC libraries.

  ## Hey, don't use my STUN/TURN server!

  If for some reason your free STUN or TURN server ends up in the
  list of servers ([stun](https://github.com/DamonOehlman/freeice/blob/master/stun.json) or
  [turn](https://github.com/DamonOehlman/freeice/blob/master/turn.json))
  that is used in this module, you can feel
  free to open an issue on this repository and those servers will be removed
  within 24 hours (or sooner).  This is the quickest and probably the most
  polite way to have something removed (and provides us some visibility
  if someone opens a pull request requesting that a server is added).

  ## Please add my server!

  If you have a server that you wish to add to the list, that's awesome! I'm
  sure I speak on behalf of a whole pile of WebRTC developers who say thanks.
  To get it into the list, feel free to either open a pull request or if you
  find that process a bit daunting then just create an issue requesting
  the addition of the server (make sure you provide all the details, and if
  you have a Terms of Service then including that in the PR/issue would be
  awesome).

  ## I know of a free server, can I add it?

  Sure, if you do your homework and make sure it is ok to use (I'm currently
  in the process of reviewing the terms of those STUN servers included from
  the original list).  If it's ok to go, then please see the previous entry
  for how to add it.

  ## Current List of Servers

  * current as at the time of last `README.md` file generation

  ### STUN

  <<< stun.json

  ### TURN

  <<< turn.json

**/

var freeice = function(opts) {
  // if a list of servers has been provided, then use it instead of defaults
  var servers = {
    stun: (opts || {}).stun || __webpack_require__(18),
    turn: (opts || {}).turn || __webpack_require__(19)
  };

  var stunCount = (opts || {}).stunCount || 2;
  var turnCount = (opts || {}).turnCount || 0;
  var selected;

  function getServers(type, count) {
    var out = [];
    var input = [].concat(servers[type]);
    var idx;

    while (input.length && out.length < count) {
      idx = (Math.random() * input.length) | 0;
      out = out.concat(input.splice(idx, 1));
    }

    return out.map(function(url) {
        //If it's a not a string, don't try to "normalice" it otherwise using type:url will screw it up
        if ((typeof url !== 'string') && (! (url instanceof String))) {
            return url;
        } else {
            return normalice(type + ':' + url);
        }
    });
  }

  // add stun servers
  selected = [].concat(getServers('stun', stunCount));

  if (turnCount) {
    selected = selected.concat(getServers('turn', turnCount));
  }

  return selected;
};

module.exports = freeice;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
  # normalice

  Normalize an ice server configuration object (or plain old string) into a format
  that is usable in all browsers supporting WebRTC.  Primarily this module is designed
  to help with the transition of the `url` attribute of the configuration object to
  the `urls` attribute.

  ## Example Usage

  <<< examples/simple.js

**/

var protocols = [
  'stun:',
  'turn:'
];

module.exports = function(input) {
  var url = (input || {}).url || input;
  var protocol;
  var parts;
  var output = {};

  // if we don't have a string url, then allow the input to passthrough
  if (typeof url != 'string' && (! (url instanceof String))) {
    return input;
  }

  // trim the url string, and convert to an array
  url = url.trim();

  // if the protocol is not known, then passthrough
  protocol = protocols[protocols.indexOf(url.slice(0, 5))];
  if (! protocol) {
    return input;
  }

  // now let's attack the remaining url parts
  url = url.slice(5);
  parts = url.split('@');

  output.username = input.username;
  output.credential = input.credential;
  // if we have an authentication part, then set the credentials
  if (parts.length > 1) {
    url = parts[1];
    parts = parts[0].split(':');

    // add the output credential and username
    output.username = parts[0];
    output.credential = (input || {}).credential || parts[1] || '';
  }

  output.url = protocol + url;
  output.urls = [ output.url ];

  return output;
};


/***/ }),
/* 18 */
/***/ (function(module) {

module.exports = JSON.parse("[\"stun.l.google.com:19302\",\"stun1.l.google.com:19302\",\"stun2.l.google.com:19302\",\"stun3.l.google.com:19302\",\"stun4.l.google.com:19302\",\"stun.ekiga.net\",\"stun.ideasip.com\",\"stun.schlund.de\",\"stun.stunprotocol.org:3478\",\"stun.voiparound.com\",\"stun.voipbuster.com\",\"stun.voipstunt.com\",\"stun.voxgratia.org\"]");

/***/ }),
/* 19 */
/***/ (function(module) {

module.exports = JSON.parse("[]");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * UAParser.js v0.7.22
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.22',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser
            /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,                      // Baidu Browser
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]*)/i,                                             // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            ], [NAME, VERSION], [

            /(konqueror)\/([\w\.]+)/i                                           // Konqueror
            ], [[NAME, 'Konqueror'], VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i                          // Microsoft Edge
            ], [[NAME, 'Edge'], VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(Avast)\/([\w\.]+)/i                                               // Avast Secure Browser
            ], [[NAME, 'Avast Secure Browser'], VERSION], [

            /(AVG)\/([\w\.]+)/i                                                 // AVG Secure Browser
            ], [[NAME, 'AVG Secure Browser'], VERSION], [

            /(puffin)\/([\w\.]+)/i                                              // Puffin
            ], [[NAME, 'Puffin'], VERSION], [

            /(focus)\/([\w\.]+)/i                                               // Firefox Focus
            ], [[NAME, 'Firefox Focus'], VERSION], [

            /(opt)\/([\w\.]+)/i                                                 // Opera Touch
            ], [[NAME, 'Opera Touch'], VERSION], [

            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i         // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(windowswechat qbcore)\/([\w\.]+)/i                                // WeChat Desktop for Windows Built-in Browser
            ], [[NAME, 'WeChat(Win) Desktop'], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /(brave)\/([\w\.]+)/i                                               // Brave browser
            ], [[NAME, 'Brave'], VERSION], [

            /(qqbrowserlite)\/([\w\.]+)/i                                       // QQBrowserLite
            ], [NAME, VERSION], [

            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
            ], [NAME, VERSION], [

            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
            ], [NAME, VERSION], [

            /(baiduboxapp)[\/\s]?([\w\.]+)/i                                    // Baidu App
            ], [NAME, VERSION], [

            /(2345Explorer)[\/\s]?([\w\.]+)/i                                   // 2345 Browser
            ], [NAME, VERSION], [

            /(MetaSr)[\/\s]?([\w\.]+)/i                                         // SouGouBrowser
            ], [NAME], [

            /(LBBROWSER)/i                                                      // LieBao Browser
            ], [NAME], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
            ], [VERSION, [NAME, 'Facebook']], [

            /safari\s(line)\/([\w\.]+)/i,                                       // Line App for iOS
            /android.+(line)\/([\w\.]+)\/iab/i                                  // Line App for Android
            ], [NAME, VERSION], [

            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /((?:oculus|samsung)browser)\/([\w\.]+)/i
            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(sailfishbrowser)\/([\w\.]+)/i                                     // Sailfish Browser
            ], [[NAME, 'Sailfish Browser'], VERSION], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /(qihu|qhbrowser|qihoobrowser|360browser)/i                         // 360
            ], [[NAME, '360 Browser']], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /(coast)\/([\w\.]+)/i                                               // Opera Coast
            ], [[NAME, 'Opera Coast'], VERSION], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i  // Google Search Appliance on iOS
            ], [[NAME, 'GSA'], VERSION], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,

                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i                        // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple'], [TYPE, SMARTTV]], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/.+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i                         // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [
            /android.+aft([bms])\sbuild/i                                       // Fire TV
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,                        // HTC
            /(zte)-(\w*)/i,                                                     // ZTE
            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
                                                                                // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /d\/huawei([\w\s-]+)[;\)]/i,
            /(nexus\s6p|vog-l29|ane-lx1|eml-l29|ele-l29)/i                              // Huawei
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /android.+(bah2?-a?[lw]\d{2})/i                                     // Huawei MediaPad
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, TABLET]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w*)/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w*)/i                                                        // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]*)/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i                   // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w*)/i,
            /android.+lg(\-?[\d\w]+)\s+build/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i             // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [
            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [
            /(lenovo)[_\s-]?([\w-]+)/i
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google'], [TYPE, SMARTTV]], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+;\s(pixel c)[\s)]/i                                       // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

            /android.+;\s(pixel( [23])?( xl)?)[\s)]/i                              // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            /android.+;\s(\w+)\s+build\/hm\1/i,                                 // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,    
                                                                                // Xiaomi Mi
            /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]?[\w\s]+))\s+build/i       // Redmi Phones
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
            /android.+(mi[\s\-_]*(?:pad)(?:[\s_]?[\w\s]+))\s+build/i            // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [
            /(mz)-([\w-]{2,})/i
            ], [[VENDOR, 'Meizu'], MODEL, [TYPE, MOBILE]], [

            /android.+a000(1)\s+build/i,                                        // OnePlus
            /android.+oneplus\s(a\d{4})[\s)]/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

            /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i                      // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

            /android.+;\s(k88)\sbuild/i                                         // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

            /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i        // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i                            // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i                    // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

            /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i                     // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

            /android.+;\s(PH-1)\s/i
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [                // Essential PH-1

            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i          // Le Pan Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

            /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

            /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i                      // Gigaset Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL], [

            /[\s\/\(](smart-?tv)[;\)]/i                                         // SmartTV
            ], [[TYPE, SMARTTV]], [

            /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,     
                                                                                // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9}).+(gecko)/i                                       // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]*)/i,                                     // Blackberry
            /(tizen|kaios)[\/\s]([\w\.]+)/i,                                    // Tizen/KaiOS
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i                  // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w*)/i,                                            // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
            /(gnu)\s?([\w\.]*)/i                                                // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i                    // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                   // Haiku
            ], [NAME, VERSION],[

            /cfnetwork\/.+darwin/i,
            /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i             // iOS
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

            /(mac\sos\sx)\s?([\w\s\.]*)/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
            /(unix)\s?([\w\.]*)/i                                               // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////
    var UAParser = function (uastring, extensions) {

        if (typeof uastring === 'object') {
            extensions = uastring;
            uastring = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var browser = { name: undefined, version: undefined };
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version); // deprecated
            return browser;
        };
        this.getCPU = function () {
            var cpu = { architecture: undefined };
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
        };
        this.getDevice = function () {
            var device = { vendor: undefined, model: undefined, type: undefined };
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
        };
        this.getEngine = function () {
            var engine = { name: undefined, version: undefined };
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
        };
        this.getOS = function () {
            var os = { name: undefined, version: undefined };
            mapper.rgx.call(os, ua, rgxmap.os);
            return os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };

    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(23);
var bytesToUuid = __webpack_require__(24);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var WildEmitter = __webpack_require__(26);

function getMaxVolume (analyser, fftBins) {
  var maxVolume = -Infinity;
  analyser.getFloatFrequencyData(fftBins);

  for(var i=4, ii=fftBins.length; i < ii; i++) {
    if (fftBins[i] > maxVolume && fftBins[i] < 0) {
      maxVolume = fftBins[i];
    }
  };

  return maxVolume;
}


var audioContextType;
if (typeof window !== 'undefined') {
  audioContextType = window.AudioContext || window.webkitAudioContext;
}
// use a single audio context due to hardware limits
var audioContext = null;
module.exports = function(stream, options) {
  var harker = new WildEmitter();

  // make it not break in non-supported browsers
  if (!audioContextType) return harker;

  //Config
  var options = options || {},
      smoothing = (options.smoothing || 0.1),
      interval = (options.interval || 50),
      threshold = options.threshold,
      play = options.play,
      history = options.history || 10,
      running = true;

  // Ensure that just a single AudioContext is internally created
  audioContext = options.audioContext || audioContext || new audioContextType();

  var sourceNode, fftBins, analyser;

  analyser = audioContext.createAnalyser();
  analyser.fftSize = 512;
  analyser.smoothingTimeConstant = smoothing;
  fftBins = new Float32Array(analyser.frequencyBinCount);

  if (stream.jquery) stream = stream[0];
  if (stream instanceof HTMLAudioElement || stream instanceof HTMLVideoElement) {
    //Audio Tag
    sourceNode = audioContext.createMediaElementSource(stream);
    if (typeof play === 'undefined') play = true;
    threshold = threshold || -50;
  } else {
    //WebRTC Stream
    sourceNode = audioContext.createMediaStreamSource(stream);
    threshold = threshold || -50;
  }

  sourceNode.connect(analyser);
  if (play) analyser.connect(audioContext.destination);

  harker.speaking = false;

  harker.suspend = function() {
    return audioContext.suspend();
  }
  harker.resume = function() {
    return audioContext.resume();
  }
  Object.defineProperty(harker, 'state', { get: function() {
    return audioContext.state;
  }});
  audioContext.onstatechange = function() {
    harker.emit('state_change', audioContext.state);
  }

  harker.setThreshold = function(t) {
    threshold = t;
  };

  harker.setInterval = function(i) {
    interval = i;
  };

  harker.stop = function() {
    running = false;
    harker.emit('volume_change', -100, threshold);
    if (harker.speaking) {
      harker.speaking = false;
      harker.emit('stopped_speaking');
    }
    analyser.disconnect();
    sourceNode.disconnect();
  };
  harker.speakingHistory = [];
  for (var i = 0; i < history; i++) {
      harker.speakingHistory.push(0);
  }

  // Poll the analyser node to determine if speaking
  // and emit events if changed
  var looper = function() {
    setTimeout(function() {

      //check if stop has been called
      if(!running) {
        return;
      }

      var currentVolume = getMaxVolume(analyser, fftBins);

      harker.emit('volume_change', currentVolume, threshold);

      var history = 0;
      if (currentVolume > threshold && !harker.speaking) {
        // trigger quickly, short history
        for (var i = harker.speakingHistory.length - 3; i < harker.speakingHistory.length; i++) {
          history += harker.speakingHistory[i];
        }
        if (history >= 2) {
          harker.speaking = true;
          harker.emit('speaking');
        }
      } else if (currentVolume < threshold && harker.speaking) {
        for (var i = 0; i < harker.speakingHistory.length; i++) {
          history += harker.speakingHistory[i];
        }
        if (history == 0) {
          harker.speaking = false;
          harker.emit('stopped_speaking');
        }
      }
      harker.speakingHistory.shift();
      harker.speakingHistory.push(0 + (currentVolume > threshold));

      looper();
    }, interval);
  };
  looper();

  return harker;
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/*
WildEmitter.js is a slim little event emitter by @henrikjoreteg largely based
on @visionmedia's Emitter from UI Kit.

Why? I wanted it standalone.

I also wanted support for wildcard emitters like this:

emitter.on('*', function (eventName, other, event, payloads) {

});

emitter.on('somenamespace*', function (eventName, payloads) {

});

Please note that callbacks triggered by wildcard registered events also get
the event name as the first argument.
*/

module.exports = WildEmitter;

function WildEmitter() { }

WildEmitter.mixin = function (constructor) {
    var prototype = constructor.prototype || constructor;

    prototype.isWildEmitter= true;

    // Listen on the given `event` with `fn`. Store a group name if present.
    prototype.on = function (event, groupName, fn) {
        this.callbacks = this.callbacks || {};
        var hasGroup = (arguments.length === 3),
            group = hasGroup ? arguments[1] : undefined,
            func = hasGroup ? arguments[2] : arguments[1];
        func._groupName = group;
        (this.callbacks[event] = this.callbacks[event] || []).push(func);
        return this;
    };

    // Adds an `event` listener that will be invoked a single
    // time then automatically removed.
    prototype.once = function (event, groupName, fn) {
        var self = this,
            hasGroup = (arguments.length === 3),
            group = hasGroup ? arguments[1] : undefined,
            func = hasGroup ? arguments[2] : arguments[1];
        function on() {
            self.off(event, on);
            func.apply(this, arguments);
        }
        this.on(event, group, on);
        return this;
    };

    // Unbinds an entire group
    prototype.releaseGroup = function (groupName) {
        this.callbacks = this.callbacks || {};
        var item, i, len, handlers;
        for (item in this.callbacks) {
            handlers = this.callbacks[item];
            for (i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i]._groupName === groupName) {
                    //console.log('removing');
                    // remove it and shorten the array we're looping through
                    handlers.splice(i, 1);
                    i--;
                    len--;
                }
            }
        }
        return this;
    };

    // Remove the given callback for `event` or all
    // registered callbacks.
    prototype.off = function (event, fn) {
        this.callbacks = this.callbacks || {};
        var callbacks = this.callbacks[event],
            i;

        if (!callbacks) return this;

        // remove all handlers
        if (arguments.length === 1) {
            delete this.callbacks[event];
            return this;
        }

        // remove specific handler
        i = callbacks.indexOf(fn);
        if (i !== -1) {
            callbacks.splice(i, 1);
            if (callbacks.length === 0) {
                delete this.callbacks[event];
            }
        }
        return this;
    };

    /// Emit `event` with the given args.
    // also calls any `*` handlers
    prototype.emit = function (event) {
        this.callbacks = this.callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this.callbacks[event],
            specialCallbacks = this.getWildcardCallbacks(event),
            i,
            len,
            item,
            listeners;

        if (callbacks) {
            listeners = callbacks.slice();
            for (i = 0, len = listeners.length; i < len; ++i) {
                if (!listeners[i]) {
                    break;
                }
                listeners[i].apply(this, args);
            }
        }

        if (specialCallbacks) {
            len = specialCallbacks.length;
            listeners = specialCallbacks.slice();
            for (i = 0, len = listeners.length; i < len; ++i) {
                if (!listeners[i]) {
                    break;
                }
                listeners[i].apply(this, [event].concat(args));
            }
        }

        return this;
    };

    // Helper for for finding special wildcard event handlers that match the event
    prototype.getWildcardCallbacks = function (eventName) {
        this.callbacks = this.callbacks || {};
        var item,
            split,
            result = [];

        for (item in this.callbacks) {
            split = item.split('*');
            if (item === '*' || (split.length === 2 && eventName.slice(0, split[0].length) === split[0])) {
                result = result.concat(this.callbacks[item]);
            }
        }
        return result;
    };

};

WildEmitter.mixin(WildEmitter);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * @name JavaScript/NodeJS Merge v1.2.1
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				if (key === '__proto__') continue;

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})( true && module && typeof module.exports === 'object' && module.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.Interop = __webpack_require__(30);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global RTCSessionDescription */
/* global RTCIceCandidate */
/* jshint -W097 */


var transform = __webpack_require__(31);
var arrayEquals = __webpack_require__(36);

function Interop() {

    /**
     * This map holds the most recent Unified Plan offer/answer SDP that was
     * converted to Plan B, with the SDP type ('offer' or 'answer') as keys and
     * the SDP string as values.
     *
     * @type {{}}
     */
    this.cache = {
        mlB2UMap : {},
        mlU2BMap : {}
    };
}

module.exports = Interop;

/**
 * Changes the candidate args to match with the related Unified Plan
 */
Interop.prototype.candidateToUnifiedPlan = function(candidate) {
    var cand = new RTCIceCandidate(candidate);

    cand.sdpMLineIndex = this.cache.mlB2UMap[cand.sdpMLineIndex];
    /* TODO: change sdpMid to (audio|video)-SSRC */

    return cand;
};

/**
 * Changes the candidate args to match with the related Plan B
 */
Interop.prototype.candidateToPlanB = function(candidate) {
    var cand = new RTCIceCandidate(candidate);

    if (cand.sdpMid.indexOf('audio') === 0) {
      cand.sdpMid = 'audio';
    } else if (cand.sdpMid.indexOf('video') === 0) {
      cand.sdpMid = 'video';
    } else {
      throw new Error('candidate with ' + cand.sdpMid + ' not allowed');
    }

    cand.sdpMLineIndex = this.cache.mlU2BMap[cand.sdpMLineIndex];

    return cand;
};

/**
 * Returns the index of the first m-line with the given media type and with a
 * direction which allows sending, in the last Unified Plan description with
 * type "answer" converted to Plan B. Returns {null} if there is no saved
 * answer, or if none of its m-lines with the given type allow sending.
 * @param type the media type ("audio" or "video").
 * @returns {*}
 */
Interop.prototype.getFirstSendingIndexFromAnswer = function(type) {
    if (!this.cache.answer) {
        return null;
    }

    var session = transform.parse(this.cache.answer);
    if (session && session.media && Array.isArray(session.media)){
        for (var i = 0; i < session.media.length; i++) {
            if (session.media[i].type == type &&
                (!session.media[i].direction /* default to sendrecv */ ||
                    session.media[i].direction === 'sendrecv' ||
                    session.media[i].direction === 'sendonly')){
                return i;
            }
        }
    }

    return null;
};

/**
 * This method transforms a Unified Plan SDP to an equivalent Plan B SDP. A
 * PeerConnection wrapper transforms the SDP to Plan B before passing it to the
 * application.
 *
 * @param desc
 * @returns {*}
 */
Interop.prototype.toPlanB = function(desc) {
    var self = this;
    //#region Preliminary input validation.

    if (typeof desc !== 'object' || desc === null ||
        typeof desc.sdp !== 'string') {
        console.warn('An empty description was passed as an argument.');
        return desc;
    }

    // Objectify the SDP for easier manipulation.
    var session = transform.parse(desc.sdp);

    // If the SDP contains no media, there's nothing to transform.
    if (typeof session.media === 'undefined' ||
        !Array.isArray(session.media) || session.media.length === 0) {
        console.warn('The description has no media.');
        return desc;
    }

    // Try some heuristics to "make sure" this is a Unified Plan SDP. Plan B
    // SDP has a video, an audio and a data "channel" at most.
    if (session.media.length <= 3 && session.media.every(function(m) {
            return ['video', 'audio', 'data'].indexOf(m.mid) !== -1;
        })) {
        console.warn('This description does not look like Unified Plan.');
        return desc;
    }

    //#endregion

    // HACK https://bugzilla.mozilla.org/show_bug.cgi?id=1113443
    var sdp = desc.sdp;
    var rewrite = false;
    for (var i = 0; i < session.media.length; i++) {
        var uLine = session.media[i];
        uLine.rtp.forEach(function(rtp) {
            if (rtp.codec === 'NULL')
            {
                rewrite = true;
                var offer = transform.parse(self.cache.offer);
                rtp.codec = offer.media[i].rtp[0].codec;
            }
        });
    }
    if (rewrite) {
        sdp = transform.write(session);
    }

    // Unified Plan SDP is our "precious". Cache it for later use in the Plan B
    // -> Unified Plan transformation.
    this.cache[desc.type] = sdp;

    //#region Convert from Unified Plan to Plan B.

    // We rebuild the session.media array.
    var media = session.media;
    session.media = [];

    // Associative array that maps channel types to channel objects for fast
    // access to channel objects by their type, e.g. type2bl['audio']->channel
    // obj.
    var type2bl = {};

    // Used to build the group:BUNDLE value after the channels construction
    // loop.
    var types = [];

    media.forEach(function(uLine) {
        // rtcp-mux is required in the Plan B SDP.
        if ((typeof uLine.rtcpMux !== 'string' ||
            uLine.rtcpMux !== 'rtcp-mux') &&
            uLine.direction !== 'inactive') {
            throw new Error('Cannot convert to Plan B because m-lines ' +
                'without the rtcp-mux attribute were found.');
        }

        // If we don't have a channel for this uLine.type OR the selected is
        // inactive, then select this uLine as the channel basis.
        if (typeof type2bl[uLine.type] === 'undefined' ||
            type2bl[uLine.type].direction === 'inactive') {
            type2bl[uLine.type] = uLine;
        }

        if (uLine.protocol != type2bl[uLine.type].protocol) {
          throw new Error('Cannot convert to Plan B because m-lines ' +
              'have different protocols and this library does not have ' +
              'support for that');
        }

        if (uLine.payloads != type2bl[uLine.type].payloads) {
          throw new Error('Cannot convert to Plan B because m-lines ' +
              'have different payloads and this library does not have ' +
              'support for that');
        }

    });

    // Implode the Unified Plan m-lines/tracks into Plan B channels.
    media.forEach(function(uLine) {
        if (uLine.type === 'application') {
            session.media.push(uLine);
            types.push(uLine.mid);
            return;
        }

        // Add sources to the channel and handle a=msid.
        if (typeof uLine.sources === 'object') {
            Object.keys(uLine.sources).forEach(function(ssrc) {
                if (typeof type2bl[uLine.type].sources !== 'object')
                    type2bl[uLine.type].sources = {};

                // Assign the sources to the channel.
                type2bl[uLine.type].sources[ssrc] =
                    uLine.sources[ssrc];

                if (typeof uLine.msid !== 'undefined') {
                    // In Plan B the msid is an SSRC attribute. Also, we don't
                    // care about the obsolete label and mslabel attributes.
                    //
                    // Note that it is not guaranteed that the uLine will
                    // have an msid. recvonly channels in particular don't have
                    // one.
                    type2bl[uLine.type].sources[ssrc].msid =
                        uLine.msid;
                }
                // NOTE ssrcs in ssrc groups will share msids, as
                // draft-uberti-rtcweb-plan-00 mandates.
            });
        }

        // Add ssrc groups to the channel.
        if (typeof uLine.ssrcGroups !== 'undefined' &&
                Array.isArray(uLine.ssrcGroups)) {

            // Create the ssrcGroups array, if it's not defined.
            if (typeof type2bl[uLine.type].ssrcGroups === 'undefined' ||
                    !Array.isArray(type2bl[uLine.type].ssrcGroups)) {
                type2bl[uLine.type].ssrcGroups = [];
            }

            type2bl[uLine.type].ssrcGroups =
                type2bl[uLine.type].ssrcGroups.concat(
                    uLine.ssrcGroups);
        }

        if (type2bl[uLine.type] === uLine) {
            // Plan B mids are in ['audio', 'video', 'data']
            uLine.mid = uLine.type;

            // Plan B doesn't support/need the bundle-only attribute.
            delete uLine.bundleOnly;

            // In Plan B the msid is an SSRC attribute.
            delete uLine.msid;

	    if (uLine.type == media[0].type) {
	      types.unshift(uLine.type);
	      // Add the channel to the new media array.
	      session.media.unshift(uLine);
	    } else {
	      types.push(uLine.type);
	      // Add the channel to the new media array.
	      session.media.push(uLine);
	    }
        }
    });

    if (typeof session.groups !== 'undefined') {
      // We regenerate the BUNDLE group with the new mids.
      session.groups.some(function(group) {
	  if (group.type === 'BUNDLE') {
	      group.mids = types.join(' ');
	      return true;
	  }
      });
    }

    // msid semantic
    session.msidSemantic = {
        semantic: 'WMS',
        token: '*'
    };

    var resStr = transform.write(session);

    return new RTCSessionDescription({
        type: desc.type,
        sdp: resStr
    });

    //#endregion
};

/* follow rules defined in RFC4145 */
function addSetupAttr(uLine) {
    if (typeof uLine.setup === 'undefined') {
        return;
    }

    if (uLine.setup === "active") {
            uLine.setup = "passive";
    } else if (uLine.setup === "passive") {
        uLine.setup = "active";
    }
}

/**
 * This method transforms a Plan B SDP to an equivalent Unified Plan SDP. A
 * PeerConnection wrapper transforms the SDP to Unified Plan before passing it
 * to FF.
 *
 * @param desc
 * @returns {*}
 */
Interop.prototype.toUnifiedPlan = function(desc) {
    var self = this;
    //#region Preliminary input validation.

    if (typeof desc !== 'object' || desc === null ||
        typeof desc.sdp !== 'string') {
        console.warn('An empty description was passed as an argument.');
        return desc;
    }

    var session = transform.parse(desc.sdp);

    // If the SDP contains no media, there's nothing to transform.
    if (typeof session.media === 'undefined' ||
        !Array.isArray(session.media) || session.media.length === 0) {
        console.warn('The description has no media.');
        return desc;
    }

    // Try some heuristics to "make sure" this is a Plan B SDP. Plan B SDP has
    // a video, an audio and a data "channel" at most.
    if (session.media.length > 3 || !session.media.every(function(m) {
            return ['video', 'audio', 'data'].indexOf(m.mid) !== -1;
        })) {
        console.warn('This description does not look like Plan B.');
        return desc;
    }

    // Make sure this Plan B SDP can be converted to a Unified Plan SDP.
    var mids = [];
    session.media.forEach(function(m) {
        mids.push(m.mid);
    });

    var hasBundle = false;
    if (typeof session.groups !== 'undefined' &&
        Array.isArray(session.groups)) {
        hasBundle = session.groups.every(function(g) {
            return g.type !== 'BUNDLE' ||
                arrayEquals.apply(g.mids.sort(), [mids.sort()]);
        });
    }

    if (!hasBundle) {
        var mustBeBundle = false;

        session.media.forEach(function(m) {
            if (m.direction !== 'inactive') {
                mustBeBundle = true;
            }
        });

        if (mustBeBundle) {
            throw new Error("Cannot convert to Unified Plan because m-lines that" +
              " are not bundled were found.");
        }
    }

    //#endregion


    //#region Convert from Plan B to Unified Plan.

    // Unfortunately, a Plan B offer/answer doesn't have enough information to
    // rebuild an equivalent Unified Plan offer/answer.
    //
    // For example, if this is a local answer (in Unified Plan style) that we
    // convert to Plan B prior to handing it over to the application (the
    // PeerConnection wrapper called us, for instance, after a successful
    // createAnswer), we want to remember the m-line at which we've seen the
    // (local) SSRC. That's because when the application wants to do call the
    // SLD method, forcing us to do the inverse transformation (from Plan B to
    // Unified Plan), we need to know to which m-line to assign the (local)
    // SSRC. We also need to know all the other m-lines that the original
    // answer had and include them in the transformed answer as well.
    //
    // Another example is if this is a remote offer that we convert to Plan B
    // prior to giving it to the application, we want to remember the mid at
    // which we've seen the (remote) SSRC.
    //
    // In the iteration that follows, we use the cached Unified Plan (if it
    // exists) to assign mids to ssrcs.

    var type;
    if (desc.type === 'answer') {
        type = 'offer';
    } else if (desc.type === 'offer') {
        type = 'answer';
    } else {
        throw new Error("Type '" + desc.type + "' not supported.");
    }

    var cached;
    if (typeof this.cache[type] !== 'undefined') {
        cached = transform.parse(this.cache[type]);
    }

    var recvonlySsrcs = {
        audio: {},
        video: {}
    };

    // A helper map that sends mids to m-line objects. We use it later to
    // rebuild the Unified Plan style session.media array.
    var mid2ul = {};
    var bIdx = 0;
    var uIdx = 0;

    var sources2ul = {};

    var candidates;
    var iceUfrag;
    var icePwd;
    var fingerprint;
    var payloads = {};
    var rtcpFb = {};
    var rtp = {};

    session.media.forEach(function(bLine) {
        if ((typeof bLine.rtcpMux !== 'string' ||
            bLine.rtcpMux !== 'rtcp-mux') &&
            bLine.direction !== 'inactive') {
            throw new Error("Cannot convert to Unified Plan because m-lines " +
                "without the rtcp-mux attribute were found.");
        }

        if (bLine.type === 'application') {
            mid2ul[bLine.mid] = bLine;
            return;
        }

        // With rtcp-mux and bundle all the channels should have the same ICE
        // stuff.
        var sources = bLine.sources;
        var ssrcGroups = bLine.ssrcGroups;
        var port = bLine.port;

        /* Chrome adds different candidates even using bundle, so we concat the candidates list */
        if (typeof bLine.candidates != 'undefined') {
            if (typeof candidates != 'undefined') {
                candidates = candidates.concat(bLine.candidates);
            } else {
                candidates = bLine.candidates;
            }
        }

        if ((typeof iceUfrag != 'undefined') && (typeof bLine.iceUfrag != 'undefined') && (iceUfrag != bLine.iceUfrag)) {
            throw new Error("Only BUNDLE supported, iceUfrag must be the same for all m-lines.\n" +
                            "\tLast iceUfrag: " + iceUfrag + "\n" +
                            "\tNew iceUfrag: " + bLine.iceUfrag
            );
        }

        if (typeof bLine.iceUfrag != 'undefined') {
                iceUfrag = bLine.iceUfrag;
        }

        if ((typeof icePwd != 'undefined') && (typeof bLine.icePwd != 'undefined') && (icePwd != bLine.icePwd)) {
            throw new Error("Only BUNDLE supported, icePwd must be the same for all m-lines.\n" +
                            "\tLast icePwd: " + icePwd + "\n" +
                            "\tNew icePwd: " + bLine.icePwd
            );
        }

        if (typeof bLine.icePwd != 'undefined') {
                icePwd = bLine.icePwd;
        }

        if ((typeof fingerprint != 'undefined') && (typeof bLine.fingerprint != 'undefined') &&
            (fingerprint.type != bLine.fingerprint.type || fingerprint.hash != bLine.fingerprint.hash)) {
            throw new Error("Only BUNDLE supported, fingerprint must be the same for all m-lines.\n" +
                            "\tLast fingerprint: " + JSON.stringify(fingerprint) + "\n" +
                            "\tNew fingerprint: " + JSON.stringify(bLine.fingerprint)
            );
        }

        if (typeof bLine.fingerprint != 'undefined') {
                fingerprint = bLine.fingerprint;
        }

        payloads[bLine.type] = bLine.payloads;
        rtcpFb[bLine.type] = bLine.rtcpFb;
        rtp[bLine.type] = bLine.rtp;

        // inverted ssrc group map
        var ssrc2group = {};
        if (typeof ssrcGroups !== 'undefined' && Array.isArray(ssrcGroups)) {
            ssrcGroups.forEach(function (ssrcGroup) {
                // XXX This might brake if an SSRC is in more than one group
                // for some reason.
                if (typeof ssrcGroup.ssrcs !== 'undefined' &&
                    Array.isArray(ssrcGroup.ssrcs)) {
                    ssrcGroup.ssrcs.forEach(function (ssrc) {
                        if (typeof ssrc2group[ssrc] === 'undefined') {
                            ssrc2group[ssrc] = [];
                        }

                        ssrc2group[ssrc].push(ssrcGroup);
                    });
                }
            });
        }

        // ssrc to m-line index.
        var ssrc2ml = {};

        if (typeof sources === 'object') {

            // We'll use the "bLine" object as a prototype for each new "mLine"
            // that we create, but first we need to clean it up a bit.
            delete bLine.sources;
            delete bLine.ssrcGroups;
            delete bLine.candidates;
            delete bLine.iceUfrag;
            delete bLine.icePwd;
            delete bLine.fingerprint;
            delete bLine.port;
            delete bLine.mid;

            // Explode the Plan B channel sources with one m-line per source.
            Object.keys(sources).forEach(function(ssrc) {

                // The (unified) m-line for this SSRC. We either create it from
                // scratch or, if it's a grouped SSRC, we re-use a related
                // mline. In other words, if the source is grouped with another
                // source, put the two together in the same m-line.
                var uLine;

                // We assume here that we are the answerer in the O/A, so any
                // offers which we translate come from the remote side, while
                // answers are local. So the check below is to make that we
                // handle receive-only SSRCs in a special way only if they come
                // from the remote side.
                if (desc.type==='offer') {
                    // We want to detect SSRCs which are used by a remote peer
                    // in an m-line with direction=recvonly (i.e. they are
                    // being used for RTCP only).
                    // This information would have gotten lost if the remote
                    // peer used Unified Plan and their local description was
                    // translated to Plan B. So we use the lack of an MSID
                    // attribute to deduce a "receive only" SSRC.
                    if (!sources[ssrc].msid) {
                        recvonlySsrcs[bLine.type][ssrc] = sources[ssrc];
                        // Receive-only SSRCs must not create new m-lines. We
                        // will assign them to an existing m-line later.
                        return;
                    }
                }

                if (typeof ssrc2group[ssrc] !== 'undefined' &&
                    Array.isArray(ssrc2group[ssrc])) {
                    ssrc2group[ssrc].some(function (ssrcGroup) {
                        // ssrcGroup.ssrcs *is* an Array, no need to check
                        // again here.
                        return ssrcGroup.ssrcs.some(function (related) {
                            if (typeof ssrc2ml[related] === 'object') {
                                uLine = ssrc2ml[related];
                                return true;
                            }
                        });
                    });
                }

                if (typeof uLine === 'object') {
                    // the m-line already exists. Just add the source.
                    uLine.sources[ssrc] = sources[ssrc];
                    delete sources[ssrc].msid;
                } else {
                    // Use the "bLine" as a prototype for the "uLine".
                    uLine = Object.create(bLine);
                    ssrc2ml[ssrc] = uLine;

                    if (typeof sources[ssrc].msid !== 'undefined') {
                        // Assign the msid of the source to the m-line. Note
                        // that it is not guaranteed that the source will have
                        // msid. In particular "recvonly" sources don't have an
                        // msid. Note that "recvonly" is a term only defined
                        // for m-lines.
                        uLine.msid = sources[ssrc].msid;
                        delete sources[ssrc].msid;
                    }

                    // We assign one SSRC per media line.
                    uLine.sources = {};
                    uLine.sources[ssrc] = sources[ssrc];
                    uLine.ssrcGroups = ssrc2group[ssrc];

                    // Use the cached Unified Plan SDP (if it exists) to assign
                    // SSRCs to mids.
                    if (typeof cached !== 'undefined' &&
                        typeof cached.media !== 'undefined' &&
                        Array.isArray(cached.media)) {

                        cached.media.forEach(function (m) {
                            if (typeof m.sources === 'object') {
                                Object.keys(m.sources).forEach(function (s) {
                                    if (s === ssrc) {
                                        uLine.mid = m.mid;
                                    }
                                });
                            }
                        });
                    }

                    if (typeof uLine.mid === 'undefined') {

                        // If this is an SSRC that we see for the first time
                        // assign it a new mid. This is typically the case when
                        // this method is called to transform a remote
                        // description for the first time or when there is a
                        // new SSRC in the remote description because a new
                        // peer has joined the conference. Local SSRCs should
                        // have already been added to the map in the toPlanB
                        // method.
                        //
                        // Because FF generates answers in Unified Plan style,
                        // we MUST already have a cached answer with all the
                        // local SSRCs mapped to some m-line/mid.

                        uLine.mid = [bLine.type, '-', ssrc].join('');
                    }

                    // Include the candidates in the 1st media line.
                    uLine.candidates = candidates;
                    uLine.iceUfrag = iceUfrag;
                    uLine.icePwd = icePwd;
                    uLine.fingerprint = fingerprint;
                    uLine.port = port;

                    mid2ul[uLine.mid] = uLine;
                    sources2ul[uIdx] = uLine.sources;

                    self.cache.mlU2BMap[uIdx] = bIdx;
                    if (typeof self.cache.mlB2UMap[bIdx] === 'undefined') {
                      self.cache.mlB2UMap[bIdx] = uIdx;
                    }
                    uIdx++;
                }
            });
        } else {
          var uLine = bLine;

          uLine.candidates = candidates;
          uLine.iceUfrag = iceUfrag;
          uLine.icePwd = icePwd;
          uLine.fingerprint = fingerprint;
          uLine.port = port;

          mid2ul[uLine.mid] = uLine;

          self.cache.mlU2BMap[uIdx] = bIdx;
          if (typeof self.cache.mlB2UMap[bIdx] === 'undefined') {
            self.cache.mlB2UMap[bIdx] = uIdx;
          }
        }

        bIdx++;
    });

    // Rebuild the media array in the right order and add the missing mLines
    // (missing from the Plan B SDP).
    session.media = [];
    mids = []; // reuse

    if (desc.type === 'answer') {

        // The media lines in the answer must match the media lines in the
        // offer. The order is important too. Here we assume that Firefox is
        // the answerer, so we merely have to use the reconstructed (unified)
        // answer to update the cached (unified) answer accordingly.
        //
        // In the general case, one would have to use the cached (unified)
        // offer to find the m-lines that are missing from the reconstructed
        // answer, potentially grabbing them from the cached (unified) answer.
        // One has to be careful with this approach because inactive m-lines do
        // not always have an mid, making it tricky (impossible?) to find where
        // exactly and which m-lines are missing from the reconstructed answer.

        for (var i = 0; i < cached.media.length; i++) {
            var uLine = cached.media[i];

            delete uLine.msid;
            delete uLine.sources;
            delete uLine.ssrcGroups;

            if (typeof sources2ul[i] === 'undefined') {
              if (!uLine.direction
                  || uLine.direction === 'sendrecv')
                  uLine.direction = 'recvonly';
              else if (uLine.direction === 'sendonly')
                  uLine.direction = 'inactive';
            } else {
              if (!uLine.direction
                  || uLine.direction === 'sendrecv')
                  uLine.direction = 'sendrecv';
              else if (uLine.direction === 'recvonly')
                  uLine.direction = 'sendonly';
            }

            uLine.sources = sources2ul[i];
            uLine.candidates = candidates;
            uLine.iceUfrag = iceUfrag;
            uLine.icePwd = icePwd;
            uLine.fingerprint = fingerprint;

            uLine.rtp = rtp[uLine.type];
            uLine.payloads = payloads[uLine.type];
            uLine.rtcpFb = rtcpFb[uLine.type];

            session.media.push(uLine);

            if (typeof uLine.mid === 'string') {
                // inactive lines don't/may not have an mid.
                mids.push(uLine.mid);
            }
        }
    } else {

        // SDP offer/answer (and the JSEP spec) forbids removing an m-section
        // under any circumstances. If we are no longer interested in sending a
        // track, we just remove the msid and ssrc attributes and set it to
        // either a=recvonly (as the reofferer, we must use recvonly if the
        // other side was previously sending on the m-section, but we can also
        // leave the possibility open if it wasn't previously in use), or
        // a=inactive.

        if (typeof cached !== 'undefined' &&
            typeof cached.media !== 'undefined' &&
            Array.isArray(cached.media)) {
            cached.media.forEach(function(uLine) {
                mids.push(uLine.mid);
                if (typeof mid2ul[uLine.mid] !== 'undefined') {
                    session.media.push(mid2ul[uLine.mid]);
                } else {
                    delete uLine.msid;
                    delete uLine.sources;
                    delete uLine.ssrcGroups;

                    if (!uLine.direction
                        || uLine.direction === 'sendrecv') {
                        uLine.direction = 'sendonly';
                    }
                    if (!uLine.direction
                        || uLine.direction === 'recvonly') {
                        uLine.direction = 'inactive';
                    }

                    addSetupAttr (uLine);
                    session.media.push(uLine);
                }
            });
        }

        // Add all the remaining (new) m-lines of the transformed SDP.
        Object.keys(mid2ul).forEach(function(mid) {
            if (mids.indexOf(mid) === -1) {
                mids.push(mid);
                if (mid2ul[mid].direction === 'recvonly') {
                    // This is a remote recvonly channel. Add its SSRC to the
                    // appropriate sendrecv or sendonly channel.
                    // TODO(gp) what if we don't have sendrecv/sendonly
                    // channel?

                    var done = false;

                    session.media.some(function (uLine) {
                        if ((uLine.direction === 'sendrecv' ||
                            uLine.direction === 'sendonly') &&
                            uLine.type === mid2ul[mid].type) {
                            // mid2ul[mid] shouldn't have any ssrc-groups
                            Object.keys(mid2ul[mid].sources).forEach(
                                function (ssrc) {
                                uLine.sources[ssrc] =
                                    mid2ul[mid].sources[ssrc];
                            });

                            done = true;
                            return true;
                        }
                    });

                    if (!done) {
                        session.media.push(mid2ul[mid]);
                    }
                } else {
                    session.media.push(mid2ul[mid]);
                }
            }
        });
    }

    // After we have constructed the Plan Unified m-lines we can figure out
    // where (in which m-line) to place the 'recvonly SSRCs'.
    // Note: we assume here that we are the answerer in the O/A, so any offers
    // which we translate come from the remote side, while answers are local
    // (and so our last local description is cached as an 'answer').
    ["audio", "video"].forEach(function (type) {
        if (!session || !session.media || !Array.isArray(session.media))
            return;

        var idx = null;
        if (Object.keys(recvonlySsrcs[type]).length > 0) {
            idx = self.getFirstSendingIndexFromAnswer(type);
            if (idx === null){
                // If this is the first offer we receive, we don't have a
                // cached answer. Assume that we will be sending media using
                // the first m-line for each media type.

                for (var i = 0; i < session.media.length; i++) {
                    if (session.media[i].type === type) {
                        idx = i;
                        break;
                    }
                }
            }
        }

        if (idx && session.media.length > idx) {
            var mLine = session.media[idx];
            Object.keys(recvonlySsrcs[type]).forEach(function(ssrc) {
                if (mLine.sources && mLine.sources[ssrc]) {
                    console.warn("Replacing an existing SSRC.");
                }
                if (!mLine.sources) {
                    mLine.sources = {};
                }

                mLine.sources[ssrc] = recvonlySsrcs[type][ssrc];
            });
        }
    });

    if (typeof session.groups !== 'undefined') {
      // We regenerate the BUNDLE group (since we regenerated the mids)
      session.groups.some(function(group) {
	  if (group.type === 'BUNDLE') {
	      group.mids = mids.join(' ');
	      return true;
	  }
      });
    }

    // msid semantic
    session.msidSemantic = {
        semantic: 'WMS',
        token: '*'
    };

    var resStr = transform.write(session);

    // Cache the transformed SDP (Unified Plan) for later re-use in this
    // function.
    this.cache[desc.type] = resStr;

    return new RTCSessionDescription({
        type: desc.type,
        sdp: resStr
    });

    //#endregion
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var transform = __webpack_require__(32);

exports.write = function(session, opts) {

  if (typeof session !== 'undefined' &&
      typeof session.media !== 'undefined' &&
      Array.isArray(session.media)) {

    session.media.forEach(function (mLine) {
      // expand sources to ssrcs
      if (typeof mLine.sources !== 'undefined' &&
        Object.keys(mLine.sources).length !== 0) {
          mLine.ssrcs = [];
          Object.keys(mLine.sources).forEach(function (ssrc) {
            var source = mLine.sources[ssrc];
            Object.keys(source).forEach(function (attribute) {
              mLine.ssrcs.push({
                id: ssrc,
                attribute: attribute,
                value: source[attribute]
              });
            });
          });
          delete mLine.sources;
        }

      // join ssrcs in ssrc groups
      if (typeof mLine.ssrcGroups !== 'undefined' &&
        Array.isArray(mLine.ssrcGroups)) {
          mLine.ssrcGroups.forEach(function (ssrcGroup) {
            if (typeof ssrcGroup.ssrcs !== 'undefined' &&
                Array.isArray(ssrcGroup.ssrcs)) {
              ssrcGroup.ssrcs = ssrcGroup.ssrcs.join(' ');
            }
          });
        }
    });
  }

  // join group mids
  if (typeof session !== 'undefined' &&
      typeof session.groups !== 'undefined' && Array.isArray(session.groups)) {

    session.groups.forEach(function (g) {
      if (typeof g.mids !== 'undefined' && Array.isArray(g.mids)) {
        g.mids = g.mids.join(' ');
      }
    });
  }

  return transform.write(session, opts);
};

exports.parse = function(sdp) {
  var session = transform.parse(sdp);

  if (typeof session !== 'undefined' && typeof session.media !== 'undefined' &&
      Array.isArray(session.media)) {

    session.media.forEach(function (mLine) {
      // group sources attributes by ssrc
      if (typeof mLine.ssrcs !== 'undefined' && Array.isArray(mLine.ssrcs)) {
        mLine.sources = {};
        mLine.ssrcs.forEach(function (ssrc) {
          if (!mLine.sources[ssrc.id])
          mLine.sources[ssrc.id] = {};
        mLine.sources[ssrc.id][ssrc.attribute] = ssrc.value;
        });

        delete mLine.ssrcs;
      }

      // split ssrcs in ssrc groups
      if (typeof mLine.ssrcGroups !== 'undefined' &&
        Array.isArray(mLine.ssrcGroups)) {
          mLine.ssrcGroups.forEach(function (ssrcGroup) {
            if (typeof ssrcGroup.ssrcs === 'string') {
              ssrcGroup.ssrcs = ssrcGroup.ssrcs.split(' ');
            }
          });
        }
    });
  }
  // split group mids
  if (typeof session !== 'undefined' &&
      typeof session.groups !== 'undefined' && Array.isArray(session.groups)) {

    session.groups.forEach(function (g) {
      if (typeof g.mids === 'string') {
        g.mids = g.mids.split(' ');
      }
    });
  }

  return session;
};



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(33);
var writer = __webpack_require__(35);

exports.write = writer;
exports.parse = parser.parse;
exports.parseFmtpConfig = parser.parseFmtpConfig;
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__(34);
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var fmtpReducer = function (acc, expr) {
  var s = expr.split('=');
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  }
  return acc;
};

exports.parseFmtpConfig = function (str) {
  return str.split(/\;\s?/).reduce(fmtpReducer, {});
};

exports.parsePayloads = function (str) {
  return str.split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var grammar = module.exports = {
  v: [{
      name: 'version',
      reg: /^(\d*)$/
  }],
  o: [{ //o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: "%s %s %d %s IP%d %s"
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly..
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  //k: [{}], // outdated thing ignored
  t: [{ //t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: "%d %d"
  }],
  c: [{ //c=IN IP4 10.47.197.26
      name: 'connection',
      reg: /^IN IP(\d) (\S*)/,
      names: ['version', 'ip'],
      format: "IN IP%d %s"
  }],
  b: [{ //b=AS:4000
      push: 'bandwidth',
      reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
      names: ['type', 'limit'],
      format: "%s:%s"
  }],
  m: [{ //m=video 51744 RTP/AVP 126 97 98 34 31
      // NB: special - pushes to session
      // TODO: rtp/fmtp should be filtered by the payloads found here?
      reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
      names: ['type', 'port', 'protocol', 'payloads'],
      format: "%s %d %s %s"
  }],
  a: [
    { //a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding) ?
          "rtpmap:%d %s/%s/%s":
          o.rate ?
          "rtpmap:%d %s/%s":
          "rtpmap:%d %s";
      }
    },
    {
      //a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      //a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: "fmtp:%d %s"
    },
    { //a=control:streamid=0
        name: 'control',
        reg: /^control:(.*)/,
        format: "control:%s"
    },
    { //a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null) ?
          "rtcp:%d %s IP%d %s":
          "rtcp:%d";
      }
    },
    { //a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: "rtcp-fb:%d trr-int %d"
    },
    { //a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null) ?
          "rtcp-fb:%s %s %s":
          "rtcp-fb:%s %s";
      }
    },
    { //a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      //a=extmap:1/recvonly URI-gps-string
      push: 'ext',
      reg: /^extmap:([\w_\/]*) (\S*)(?: (\S*))?/,
      names: ['value', 'uri', 'config'], // value may include "/direction" suffix
      format: function (o) {
        return (o.config != null) ?
          "extmap:%s %s %s":
          "extmap:%s %s";
      }
    },
    {
      //a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null) ?
          "crypto:%d %s %s %s":
          "crypto:%d %s %s";
      }
    },
    { //a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: "setup:%s"
    },
    { //a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: "mid:%s"
    },
    { //a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: "msid:%s"
    },
    { //a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*)/,
      format: "ptime:%d"
    },
    { //a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*)/,
      format: "maxptime:%d"
    },
    { //a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    { //a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    { //a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: "ice-ufrag:%s"
    },
    { //a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: "ice-pwd:%s"
    },
    { //a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: "fingerprint:%s %s"
    },
    {
      //a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      //a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0
      //a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0
      //a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0
      //a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation'],
      format: function (o) {
        var str = "candidate:%s %d %s %d %s %d typ %s";

        str += (o.raddr != null) ? " raddr %s rport %d" : "%v%v";

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? " tcptype %s" : "%v";

        if (o.generation != null) {
          str += " generation %d";
        }
        return str;
      }
    },
    { //a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    { //a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: "remote-candidates:%s"
    },
    { //a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: "ice-options:%s"
    },
    { //a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: "ssrcs",
      reg: /^ssrc:(\d*) ([\w_]*):(.*)/,
      names: ['id', 'attribute', 'value'],
      format: "ssrc:%d %s:%s"
    },
    { //a=ssrc-group:FEC 1 2
      push: "ssrcGroups",
      reg: /^ssrc-group:(\w*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: "ssrc-group:%s %s"
    },
    { //a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: "msidSemantic",
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: "msid-semantic: %s %s" // space after ":" is not accidental
    },
    { //a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: "group:%s %s"
    },
    { //a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    { //a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    { // any a= that we don't understand is kepts verbatim on media.invalid
      push: 'invalid',
      names: ["value"]
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = "%s";
    }
  });
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var grammar = __webpack_require__(34);

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
      case '%%':
        return '%';
      case '%s':
        return String(arg);
      case '%d':
        return Number(arg);
      case '%v':
        return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // "v=0" must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = " "; // "s= " must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = "";
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function arrayEquals(array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!arrayEquals.apply(this[i], [array[i]]))
                return false;
        } else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal:
            // {x:20} != {x:20}
            return false;
        }
    }
    return true;
};



/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Does nothing at all.


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
// @ts-ignore
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const CommonHelper_1 = __webpack_require__(5);
const vidWebRTC = __webpack_require__(14);
class Confrence extends events_1.EventEmitter {
    constructor(_Credentials) {
        super();
        this.participants = {};
        this.videoArray = [];
        this.call_type = "video";
        this.projectID = _Credentials.projectId;
        this.projectSecret = _Credentials.secret;
        //this.parentInstance=_Credentials.instance;
        this.currentUser = _Credentials.currentUser;
        this.currentRoom = _Credentials.room;
        this.localVideo = _Credentials.localVideo;
        this.container = _Credentials.container;
        this.call_type = _Credentials.call_type;
        this.Authentication(_Credentials);
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        this.Connect(credentials.media_server);
    }
    Connect(mediaServer) {
        var webSocketConnetion = new WebSocket(mediaServer);
        webSocketConnetion.onmessage = (message) => {
            var messageData = JSON.parse(message.data);
            console.log('Received message: ' + message.data);
            switch (messageData.id) {
                case 'existingParticipants':
                    console.log("===yes you====", messageData);
                    this.OnExistingParticipant(messageData);
                    // EventHandler.OnRegister(messageData,this);
                    break;
                case 'newParticipantArrived':
                    this.onNewParticipant(messageData);
                    break;
                case 'participantLeft':
                    this.OnParticipantLeft(messageData);
                    break;
                case 'receiveVideoAnswer':
                    this.ReceiveVideoResponse(messageData);
                    break;
                case 'iceCandidate':
                    this.participants[messageData.name].addIceCandidate(messageData.candidate, function (error) {
                        if (error) {
                            console.error("Error adding candidate: " + error);
                            return;
                        }
                    });
                    break;
                case 'ping':
                    this.SendPacket({ requestType: 'pong', "mcToken": this.McToken });
                    break;
                default:
                    console.error('Unrecognized message', messageData);
            }
        };
        webSocketConnetion.onclose = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnClose socket==", res);
        };
        webSocketConnetion.onopen = (res) => {
            this.Register();
            EventHandler_1.default.OnConnection(res, this);
            console.log("OnOpen socket==", res);
        };
        //   webSocketConnetion.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        webSocketConnetion.onerror = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
        };
        this.ws = webSocketConnetion;
    }
    OnExistingParticipant(data) {
        let vidContraints = {
            mandatory: {
                //maxWidth : 320,
                maxFrameRate: 15,
                minFrameRate: 15
            }
        };
        if (this.call_type != "video")
            vidContraints = false;
        var constraints = {
            audio: true,
            video: vidContraints
        };
        CommonHelper_1.SetPlaysInline(this.localVideo);
        var options = {
            localVideo: this.localVideo,
            mediaConstraints: constraints,
            onicecandidate: (candidate) => {
                var message = {
                    id: 'onIceCandidate',
                    candidate: candidate,
                    name: this.currentUser
                };
                this.SendPacket(message);
            }
        };
        let rtcpeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            rtcpeer.generateOffer((error, offerSdp, wp) => {
                if (error)
                    return console.error("sdp offer error");
                var msg = { id: "receiveVideoFrom",
                    sender: this.currentUser,
                    sdpOffer: offerSdp
                };
                this.SendPacket(msg);
            });
        });
        this.participants[this.currentUser] = rtcpeer;
        data.data.forEach((participant) => {
            this.emit("groupCall", { type: "NEW_PARTICIPANT", message: "Participant List", participant: participant });
        });
    }
    /**
     * SetParticipantStream
     */
    SetParticipantVideo(video, participant) {
        CommonHelper_1.SetPlaysInline(video);
        var options = {
            remoteVideo: video,
            onicecandidate: (candidate) => {
                var message = {
                    id: 'onIceCandidate',
                    candidate: candidate,
                    name: participant
                };
                this.SendPacket(message);
            }
        };
        let rtcp = new vidWebRTC.WebRtcPeer.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            rtcp.generateOffer((error, offerSdp) => {
                if (error)
                    return console.error("sdp offer error");
                console.log('Invoking SDP offer callback function');
                var message = {
                    id: "receiveVideoFrom",
                    sender: participant,
                    sdpOffer: offerSdp
                };
                this.SendPacket(message);
            });
        });
        this.participants[participant] = rtcp;
    }
    onNewParticipant(request) {
        this.emit("groupCall", { type: "NEW_PARTICIPANT", message: "Participant has joined", participant: request.name });
    }
    OnParticipantLeft(request) {
        this.emit("groupCall", { type: "PARTICIPANT_LEFT", message: "Participant has left", participant: request.name });
        var participant = this.participants[request.name];
        if (participant && participant != undefined) {
            participant.dispose();
            delete this.participants[request.name];
        }
    }
    ReceiveVideoResponse(result) {
        let participant = this.participants[result.name];
        console.log("===ongroupcall==recievresp==", result, "participant", this.participants);
        if (participant && participant != undefined)
            participant.processAnswer(result.sdpAnswer, function (error) {
                if (error)
                    return console.error(error);
            });
    }
    OnIceCandidate(res) {
        let participant = this.participants[res.name];
        if (participant != undefined)
            participant.addIceCandidate(res.candidate, function (error) {
                if (error) {
                    console.error("Error adding candidate: " + error);
                    return;
                }
            });
    }
    /**
     * Leave the room
     */
    LeaveRoom() {
        this.SendPacket({
            id: 'leaveRoom'
        });
        for (var key in this.participants) {
            let participant = this.participants[key];
            if (participant && participant != undefined)
                participant.dispose();
        }
        this.ws.close();
    }
    /**
     * Close
     */
    Close() {
    }
    Register() {
        var message = {
            id: 'joinRoom',
            name: this.currentUser,
            room: this.currentRoom,
        };
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * SetMicMute
     */
    SetMicMute() {
        let video = this.localVideo;
        if (video != null && video != undefined)
            video.srcObject.getAudioTracks()[0].enabled = false;
        var message = {
            id: 'media_status',
            status: { type: "mic", status: 0, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    /**
     * SetMicMute
     */
    SetMicUnmute() {
        let video = this.localVideo;
        if (video != null && video != undefined)
            video.srcObject.getAudioTracks()[0].enabled = true;
        var message = {
            id: 'media_status',
            status: { type: "mic", status: 1, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    /**
     * SetMicMute
     */
    SetCameraOn() {
        let video = this.localVideo;
        if (video != null && video != undefined)
            video.srcObject.getVideoTracks()[0].enabled = true;
        var message = {
            id: 'media_status',
            status: { type: "camera", status: 1, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    /**
     * SetMicMute
     */
    SetCameraOff() {
        let video = this.localVideo;
        if (video != null && video != undefined)
            video.srcObject.getVideoTracks()[0].enabled = false;
        var message = {
            id: 'media_status',
            status: { type: "camera", status: 0, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    GetContainer() {
        let container = document.createElement("section");
        for (var p in this.participants) {
            let video = this.participants[p].getVideoElement();
            let smallContainer = this.participants[p].createVideo(video.srcObject);
            container.appendChild(smallContainer);
        }
        return container;
        //return this.container;
    }
}
exports.default = Confrence;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
// @ts-ignore
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const Auth_1 = __webpack_require__(6);
// register model for registering
const RegisterModel_1 = __webpack_require__(8);
// register event handler
const RegisterEventHandler_1 = __webpack_require__(10);
//call model for initiating a call
const CallRequestModel_1 = __webpack_require__(11);
const CommonHelper_1 = __webpack_require__(5);
const vidWebRTC = __webpack_require__(14);
class ManyToMany extends events_1.EventEmitter {
    constructor(_Credentials) {
        super();
        this.UUIDSessions = {};
        this.UUIDSessionTypes = {};
        this.UUIDSessionMediaTypes = {};
        this.participants = {};
        this.participantVideo = {};
        this.callSession = "";
        this.participatArray = [];
        this.mediaType = "";
        this.projectID = _Credentials.projectID;
        this.projectSecret = _Credentials.secret;
        if (_Credentials.host) {
            this.Connect(_Credentials.host);
        }
        else {
            this.Authentication(_Credentials);
        }
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        console.log("====DER===", credentials, this.projectID, this.projectSecret, this.clientToken);
        //this.Connect('wss://cpaas-url-based-demo.vdotok.com:8443/call')
        // this.Connect('wss://kurento3.togee.io:8443/call');
        Auth_1.default.Authorization(credentials.projectID, credentials.secret).then((response) => {
            console.log("===Authorization-outer===", response);
            if (response && response.status == 200) {
                let host = `${response.media_server_map.protocol}://${response.media_server_map.host}:${response.media_server_map.port}/${response.media_server_map.end_point}`;
                this.Connect(host);
                console.log("===Authorization===", response);
            }
            else
                EventHandler_1.default.OnAuthError(response.message, this);
        });
    }
    Connect(mediaServer) {
        var webSocketConnetion = new WebSocket(mediaServer);
        webSocketConnetion.onmessage = (message) => {
            var messageData = JSON.parse(message.data);
            console.log('Received message: ', messageData);
            switch (messageData.requestType) {
                case 'register':
                    RegisterEventHandler_1.default.SetRegisterResponse(messageData, this);
                    break;
                case 'callResponse':
                    console.log(' CallResponse: ', messageData);
                    this.CallResponse(messageData);
                    break;
                case 'incomingCall':
                    this.callSession = messageData.sessionUUID;
                    this.mediaType = messageData.media_type;
                    console.log('incomingCall case: ', message);
                    EventHandler_1.default.OnIncomingGroupCall(messageData, this);
                    // this.incomingCall(messageData);
                    break;
                case 'startCommunication':
                    this.SessionStart(messageData);
                    break;
                case 'stopCommunication':
                    console.info('Communication ended by remote peer', messageData);
                    //EventHandler.SessionEnd(messageData,this);
                    // this.DisposeWebrtc(true);
                    break;
                case 'iceCandidate':
                    this.AddCandidate(messageData);
                    break;
                case 'session_invite':
                    //EventHandler.SessionInvite(messageData,this);
                    break;
                case 'session_cancel':
                    this.OnSessionCancel(messageData);
                    console.log("===onParticipantOffer== exiting session_cancel", messageData, new Date().toLocaleTimeString());
                    //EventHandler.SessionCancel(messageData,this);
                    break;
                /////////////////////////////////////////////
                /////////  many to many events
                case 'existing_participants':
                    console.log("===onParticipantOffer== exiting", messageData, new Date().toLocaleTimeString());
                    this.OnExistingParticipants(messageData);
                    //EventHandler.SetExistingParticipants(messageData,this);
                    break;
                case 'new_participant_arrived':
                    console.log("===onParticipantOffer== exiting new", messageData, new Date().toLocaleTimeString());
                    this.OnNewParticipant(messageData);
                    break;
                case 'participantLeft':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    this.OnParticipantLeft(messageData);
                    break;
                case 'state_information':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    EventHandler_1.default.SetParticipantStatus(messageData, this);
                    break;
                //EventHandler.SetExistingParticipants(messageData,this);
                ////////   end many to many events
                ////////////////////////////////////////////
                //this.DisposeWebrtc(true);
                case 'ping':
                    this.SendPacket({ requestType: 'pong', "mcToken": this.McToken });
                    break;
                default:
                // console.error('Unrecognized message', messageData);
            }
        };
        webSocketConnetion.onclose = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnClose socket==", res);
        };
        webSocketConnetion.onopen = (res) => {
            EventHandler_1.default.OnConnection(res, this);
            console.log("OnOpen socket==", res);
        };
        //   webSocketConnetion.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        webSocketConnetion.onerror = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
        };
        this.ws = webSocketConnetion;
    }
    AddCandidate(message) {
        console.log("Add Ice Candidate::::", message, this.participants[message.referenceID]);
        if (this.participants[message.referenceID]) {
            this.participants[message.referenceID].addIceCandidate(message.candidate, (error) => {
                if (error) {
                    EventHandler_1.default.OnAddCandidate(error, this);
                    return console.error('Error adding candidate: ' + error);
                }
            });
        }
        else {
            console.error("Participant not found for Add Ice Candidate::::", message, this.participants[message.referenceID]);
        }
    }
    OnExistingParticipants(response) {
        let refIDs = response.referenceIDs;
        let participantList = refIDs;
        refIDs.forEach((ref) => {
            if (ref != undefined) {
                // this.participatArray.push(ref);
                // let video=this.ExistingParticipant(ref);
                // participantList.push({referenceID:ref,stream:video.srcObject});
                this.emit("groupCall", { type: "NEW_PARTICIPANT", message: "New participant arrived.", participant: ref });
            }
        });
        //	this.emit("groupCall",{type:"PARTICIPANT_LIST",message:"Participant List is available",participant_list:participantList});
    }
    OnSessionCancel(response) {
        let refID = response.referenceID;
        this.emit("groupCall", { type: "PARTICIPANT_LEFT", message: "Participant left.", participant: refID });
        var participant = this.participants[refID];
        this.participatArray.splice(this.participatArray.indexOf(refID), 1);
        if (participant && participant != undefined) {
            participant.dispose();
        }
        delete this.participants[refID];
        delete this.participantVideo[refID];
    }
    OnNewParticipant(response) {
        let refID = response.referenceID;
        if (refID != undefined && this.participatArray.indexOf(refID) == -1) {
            //let video=this.ExistingParticipant(refID);
            this.emit("groupCall", { type: "NEW_PARTICIPANT", message: "New participant arrived.", participant: refID });
        }
    }
    OnParticipantLeft(response) {
        let refID = response.referenceID;
        this.emit("groupCall", { type: "PARTICIPANT_LEFT", message: "Participant left.", participant: refID });
        // var participant = this.participants[refID];
        // this.participatArray.splice(this.participatArray.indexOf(refID),1);
        // //participant.dispose();
        // delete this.participants[refID];
        // delete this.participantVideo[refID];
    }
    SetParticipantVideo(refId, partiVideo) {
        CommonHelper_1.SetPlaysInline(partiVideo);
        let options = {
            remoteVideo: partiVideo,
            onicecandidate: (candidate) => {
                this.OnParticipantIceCandidate(candidate, refId);
            },
            onerror: this.onError
        };
        let rtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            rtcPeer.generateOffer((error, offerSdp) => {
                this.onParticipantOffer(error, offerSdp, refId);
            });
        });
        this.participants[refId] = rtcPeer;
        this.participantVideo[refId] = partiVideo;
        return partiVideo;
    }
    ExistingParticipant(refId) {
        var _a;
        let partiVideo = document.createElement("video");
        partiVideo.autoplay = true;
        partiVideo.muted = true;
        partiVideo.style.display = "none";
        let options = {
            remoteVideo: partiVideo,
            onicecandidate: (candidate) => {
                this.OnParticipantIceCandidate(candidate, refId);
            },
            onerror: this.onError
        };
        let rtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            rtcPeer.generateOffer((error, offerSdp) => {
                this.onParticipantOffer(error, offerSdp, refId);
            });
        });
        this.participants[refId] = rtcPeer;
        this.participantVideo[refId] = partiVideo;
        (_a = document.getElementById("hellofyou")) === null || _a === void 0 ? void 0 : _a.appendChild(partiVideo);
        return partiVideo;
    }
    CallResponse(message) {
        console.info('CallResponse', this.participants[message.referenceID], message);
        if (message.response == 'accepted') {
            this.participants[message.referenceID].processAnswer(message.sdpAnswer, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
        }
    }
    SessionStart(message) {
        EventHandler_1.default.SessionStart(message, this);
        console.log("Start=Commm", message.referenceID, message.referenceID, this.participants[message.referenceID]);
        this.participants[message.referenceID].processAnswer(message.sdpAnswer, (error) => {
            if (error) {
                EventHandler_1.default.SessionSDP(error, this);
                return console.error(error);
            }
        });
    }
    onOfferIncomingCall(error, offerSdp, from) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        let response = {
            "type": "request",
            "requestType": "session_invite",
            "sdpOffer": offerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.callSession,
            /////// new change
            "referenceID": this.currentUser,
            ///////////////////////////////////
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
    }
    OnOfferManytoManyCall(error, offerSdp, from) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        let response = {
            "type": "request",
            "requestType": "session_invite",
            "sdpOffer": offerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.callSession,
            /////// new change
            "referenceID": this.currentUser,
            ///////////////////////////////////
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
    }
    /*************
     * Register user to SDK
     */
    Register(referenceID, authorizationToken) {
        this.currentUser = referenceID;
        let regMessage = new RegisterModel_1.default();
        regMessage.requestID = new Date().getTime().toString();
        regMessage.tenantID = this.projectID;
        regMessage.projectID = this.projectID;
        console.log("*register2" , this.projectID);
        regMessage.referenceID = referenceID;
        regMessage.authorizationToken = authorizationToken;
        regMessage.SendRegisterRequest(this.ws);
    }
    GroupCall(params) {
        this.mediaType = params.call_type;
        this.to = Array.isArray(params.to) ? params.to : [params.to];
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        CommonHelper_1.SetPlaysInline(this.localVideo);
        let constraints = {
            audio: true,
            video: params.call_type != "audio"
            // video: {
            //     mandatory: {
            //         maxWidth: 320,
            //         maxFrameRate: 15,
            //         minFrameRate: 15
            //     }
            // }
        };
        var options = {
            mediaConstraints: constraints,
            localVideo: params.localVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        let webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            webRtcPeer.generateOffer((error, offerSdp) => {
                this.onManyToManyOfferCall(error, offerSdp, params.call_type);
            });
        });
        this.participants[this.currentUser] = webRtcPeer;
    }
    JoinGroupCall(params) {
        this.mediaType = params.call_type;
        this.localVideo = params.localVideo;
        CommonHelper_1.SetPlaysInline(this.localVideo);
        let constraints = {
            audio: true,
            video: params.call_type != "audio"
            // video: {
            //     mandatory: {
            //         maxWidth: 320,
            //         maxFrameRate: 15,
            //         minFrameRate: 15
            //     }
            // }
        };
        var options = {
            mediaConstraints: constraints,
            localVideo: params.localVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentFromUser);
            },
            onerror: this.onError
        };
        let webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            webRtcPeer.generateOffer((error, offerSdp) => {
                console.log("======here===it goes inner sess", this.callSession);
                this.onJoinManyToManyOfferCall(error, offerSdp, params.call_type);
            });
            console.log("======here===it goes");
        });
        this.participants[this.currentUser] = webRtcPeer;
    }
    /*************
     *
     * Call one to many Broadcasting
     *
     */
    //public CallOneToMany(params:any) {
    Broadcasting(params) {
        this.to = params.to;
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        var options = {
            localVideo: params.localVideo,
            //remoteVideo : params.remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferOneToManyCall(error, offerSdp);
            });
        });
    }
    onOfferOneToManyCall(error, offerSdp) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_many";
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.call_type = "one_to_many";
        callRequest.SendCallRequest(this.ws);
    }
    AcceptBroadcast(remoteVideo) {
        let from = this.currentFromUser;
        var options = {
            remoteVideo: remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, from);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferIncomingCall(error, offerSdp, from);
            });
        });
    }
    /*********************************************************
     *
     * End Call One To Many Type
     *
     *
     *********************************************************/
    /**
     *
     * @param error
     * @param offerSdp
     * @returns
     */
    onOfferCall(error, offerSdp, media_type) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.media_type = media_type;
        callRequest.SendCallRequest(this.ws);
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_one";
        console.log(' OnOfferCall :: :: ::', media_type);
        // var message = {
        // 	id : 'call',
        // 	from : this.currentUser,
        // 	to : this.to,
        // 	sdpOffer : offerSdp
        // };
        // console.log('Invoking SDP Message',message);
        // this.SendPacket(message);
    }
    /*********************************************************
     *
     *  Many One To Many Offer
     *
     *
     *********************************************************/
    /**
     *
     * @param error
     * @param offerSdp
     * @returns
     */
    onManyToManyOfferCall(error, offerSdp, media_type) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        this.callSession = uUID;
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.media_type = media_type;
        callRequest.call_type = "many_to_many";
        callRequest.SendCallRequest(this.ws);
        console.log(' OnOfferCall :: :: ::', media_type);
    }
    onJoinManyToManyOfferCall(error, offerSdp, media_type) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        console.log("======here===it goes inner", media_type);
        let uUID = new Date().getTime().toString();
        let sessionUUID = this.callSession;
        console.log("======here===it goes sess", sessionUUID);
        var message = {
            from: this.currentUser,
            sdpOffer: offerSdp,
            // Custom Attributes
            responseCode: 200,
            responseMessage: "accepted",
            requestType: "session_invite",
            type: "request",
            session_type: "call",
            call_type: "many_to_many",
            media_type: media_type,
            requestID: uUID,
            sessionUUID: this.callSession,
            mcToken: this.mcToken
        };
        this.SendPacket(message);
    }
    onParticipantOffer(error, offerSdp, to) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        var message = {
            from: this.currentUser,
            to: to,
            requestType: "to_receive_stream",
            sdpOffer: offerSdp,
            requestID: uUID,
            type: "request",
            sessionUUID: this.callSession,
            mcToken: this.McToken
        };
        console.log("===onParticipantOffer==", message);
        this.SendPacket(message);
    }
    DisposeWebrtc(status) {
        for (var p in this.participants) {
            let partiRTC = this.participants[p];
            if (partiRTC && partiRTC != undefined) {
                partiRTC.dispose();
            }
        }
        this.participants = {};
        this.participantVideo = {};
        this.callSession = "";
        this.participatArray = [];
    }
    onError(error) {
        EventHandler_1.default.OnRTCPeer(error, this);
    }
    onIceCandidate(candidate, referenceID) {
        console.log("Local candidate" + JSON.stringify(candidate));
        var message = {
            requestType: 'onIceCandidate',
            candidate: candidate,
            referenceID: referenceID,
            sessionUUID: this.callSession
        };
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * EndCall
     */
    /***
     *
     * On Participant IceCandidate
     *
     */
    OnParticipantIceCandidate(candidate, ref) {
        var message = {
            requestType: 'onIceCandidate',
            candidate: candidate,
            referenceID: ref,
            sessionUUID: this.callSession
        };
        this.SendPacket(message);
    }
    SetMicMute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video") ? 1 : 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": 0,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = false;
            if (this.localVideo.localName == "audio")
                this.localVideo.audioTracks[0].enabled = false;
        }
    }
    /**
     * SetMicMute
     */
    SetMicUnmute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video") ? 1 : 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": 1,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = true;
            if (this.localVideo.localName == "audio")
                this.localVideo.audioTracks[0].enabled = true;
        }
    }
    /**
     * SetCameraOn
     */
    SetCameraOn() {
        if (this.localVideo && this.localVideo != undefined) {
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": 1,
                "videoInformation": 1
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = true;
        }
    }
    /**
     * SetCameraOff
     */
    SetCameraOff() {
        if (this.localVideo && this.localVideo != undefined) {
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": 1,
                "videoInformation": 0
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = false;
        }
    }
    LeaveGroupCall() {
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.callSession,
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    CancelCall() {
        let from = this.currentFromUser;
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
}
exports.default = ManyToMany;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
// @ts-ignore
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const Auth_1 = __webpack_require__(6);
// register model for registering
const RegisterModel_1 = __webpack_require__(8);
// register event handler
const RegisterEventHandler_1 = __webpack_require__(10);
//call model for initiating a call
const CallRequestModel_1 = __webpack_require__(11);
// Helper
const CommonHelper_1 = __webpack_require__(5);
const vidWebRTC = __webpack_require__(14);
class Broadcast extends events_1.EventEmitter {
    constructor(_Credentials) {
        super();
        this.UUIDSessions = {};
        this.UUIDSessionTypes = {};
        this.UUIDSessionMediaTypes = {};
        this.videoStatus = 1;
        this.audioStatus = 1;
        this.broadCastSession = {};
        this.projectID = _Credentials.projectID;
        this.projectSecret = _Credentials.secret;
        if (_Credentials.host) {
            this.Connect(_Credentials.host);
        }
        else {
            this.Authentication(_Credentials);
        }
        //uncomment for sviewer.com
        //this.Connect("wss://ssig.vdotok.dev:8443/call");
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        console.log("====DER===", credentials, this.projectID, this.projectSecret, this.clientToken);
        //this.Connect('wss://cpaas-url-based-demo.vdotok.com:8443/call')
        // this.Connect('wss://kurento3.togee.io:8443/call');
        Auth_1.default.Authorization(credentials.projectID, credentials.secret).then((response) => {
            console.log("===Authorization-outer===", response);
            if (response && response.status == 200) {
                let host = `${response.media_server_map.protocol}://${response.media_server_map.host}:${response.media_server_map.port}/${response.media_server_map.end_point}`;
                this.Connect(host);
                console.log("===Authorization===", response);
            }
            else
                EventHandler_1.default.OnAuthError(response.message, this);
        });
    }
    Connect(mediaServer) {
        var webSocketConnetion = new WebSocket(mediaServer);
        webSocketConnetion.onmessage = (message) => {
            var messageData = JSON.parse(message.data);
            console.log('Received message: ', messageData);
            switch (messageData.requestType) {
                case 'register':
                    RegisterEventHandler_1.default.SetRegisterResponse(messageData, this);
                    break;
                case 'registerURL':
                    RegisterEventHandler_1.default.SetRegisterResponse(messageData, this);
                    break;
                case 'callResponse':
                    console.log(' CallResponse: ', messageData);
                    this.CallResponse(messageData);
                    EventHandler_1.default.OnCallResponse(messageData, this);
                    break;
                case 'incomingCall':
                    this.callSession = messageData.sessionUUID;
                    this.currentFromUser = messageData.from;
                    this.UUIDSessions[messageData.from] = messageData.sessionUUID;
                    this.UUIDSessionTypes[messageData.sessionUUID] = messageData.call_type;
                    this.UUIDSessionMediaTypes[messageData.from] = messageData.media_type;
                    this.mediaType = messageData.media_type;
                    console.log('incomingCall case: ', message);
                    EventHandler_1.default.OnIncomingCall(messageData, this);
                    // this.incomingCall(messageData);
                    break;
                case 'startCommunication':
                    this.SessionStart(messageData);
                    break;
                case 'stopCommunication':
                    console.info('Communication ended by remote peer');
                    EventHandler_1.default.SessionEnd(messageData, this);
                    this.DisposeWebrtc(true);
                    break;
                case 'iceCandidate':
                    this.AddCandidate(messageData);
                    break;
                case 'session_invite':
                    EventHandler_1.default.SessionInvite(messageData, this);
                    break;
                case 'session_cancel':
                    EventHandler_1.default.SessionCancel(messageData, this);
                    //this.DisposeWebrtc(true);
                    break;
                case 'state_information':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    EventHandler_1.default.SetCallerStatus(messageData, this);
                    break;
                case 'ping':
                    this.SendPacket({ requestType: 'pong', "mcToken": this.McToken });
                    break;
                default:
                // console.error('Unrecognized message', messageData);
            }
        };
        webSocketConnetion.onclose = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnClose socket==", res);
        };
        webSocketConnetion.onopen = (res) => {
            EventHandler_1.default.OnConnection(res, this);
            console.log("OnOpen socket==", res);
        };
        //   webSocketConnetion.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        webSocketConnetion.onerror = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
        };
        this.ws = webSocketConnetion;
    }
    AddCandidate(message) {
        this.broadCastSession[message.sessionUUID].addIceCandidate(message.candidate, (error) => {
            if (error) {
                EventHandler_1.default.OnAddCandidate(error, this);
                return console.error('Error adding candidate: ' + error);
            }
        });
    }
    CallResponse(response) {
        console.info('CallResponse', this.webRtcPeer, response);
        if (response.response == 'accepted') {
            this.broadCastSession[response.sessionUUID].processAnswer(response.sdpAnswer, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
        }
    }
    SessionStart(message) {
        EventHandler_1.default.SessionStart(message, this);
        this.broadCastSession[message.sessionUUID].processAnswer(message.sdpAnswer, (error) => {
            if (error) {
                EventHandler_1.default.SessionSDP(error, this);
                return console.error(error);
            }
        });
    }
    AcceptCall(localVideo, remoteVideo) {
        this.localVideo = localVideo;
        let from = this.currentFromUser;
        //let mediaType=this.UUIDSessionMediaTypes[from];
        let mediaType = this.mediaType;
        var constraints = {
            audio: true,
            video: mediaType != "audio"
        };
        var options = {
            mediaConstraints: constraints,
            localVideo: localVideo,
            remoteVideo: remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, from);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendrecv(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferIncomingCall(error, offerSdp, from);
            });
        });
    }
    RejectCall(message) {
        let from = this.currentFromUser;
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	callResponse : 'reject',
        // 	message : 'user declined'
        // };
        let response = {
            "type": "response",
            "from": from,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "responseCode": 496,
            "responseMessage": "rejected"
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    onOfferIncomingCall(error, offerSdp, from) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	callResponse : 'accept',
        // 	sdpOffer : offerSdp
        // };
        let response = {
            "type": "request",
            "requestType": "session_invite",
            "sdpOffer": offerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
    }
    onOfferPublicUrlCall(error, offerSdp, sessionID) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	callResponse : 'accept',
        // 	sdpOffer : offerSdp
        // };
        let response = {
            "type": "request",
            "requestType": "publicURL",
            "sdpOffer": offerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": sessionID,
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
    }
    /*************
     * Register user to SDK
     */
    Register(referenceID, authorizationToken) {
        this.currentUser = referenceID;
        let regMessage = new RegisterModel_1.default();
        regMessage.requestID = new Date().getTime().toString();
        regMessage.tenantID = this.projectID;
        regMessage.referenceID = referenceID;
        regMessage.authorizationToken = authorizationToken;
        regMessage.SendRegisterRequest(this.ws);
    }
    RegisterPublicURL() {
        let referenceID = CommonHelper_1.UuidGenerator();
        this.currentUser = referenceID;
        let regMessage = new RegisterModel_1.default();
        regMessage.requestID = new Date().getTime().toString();
        regMessage.tenantID = this.projectID;
        regMessage.referenceID = referenceID;
        regMessage.requestType = "registerURL";
        regMessage.SendRegisterRequest(this.ws);
    }
    Call(params) {
        this.mediaType = "video";
        this.to = Array.isArray(params.to) ? params.to : [params.to];
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        CommonHelper_1.SetPlaysInline(this.localVideo);
        var options = {
            localVideo: params.localVideo,
            remoteVideo: params.remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendrecv(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferCall(error, offerSdp, "video");
            });
        });
    }
    AudioCall(params) {
        var constraints = {
            audio: true,
            video: false
        };
        this.mediaType = "audio";
        this.to = Array.isArray(params.to) ? params.to : [params.to];
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        CommonHelper_1.SetPlaysInline(this.localVideo);
        var options = {
            localVideo: params.localVideo,
            remoteVideo: params.remoteVideo,
            mediaConstraints: constraints,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendrecv(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferCall(error, offerSdp, "audio");
            });
        });
    }
    /*************
     *
     * Call one to many Broadcasting
     *
     */
    //public CallOneToMany(params:any) {
    Broadcasting(params) {
        this.mediaType = "video";
        this.to = params.to;
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        CommonHelper_1.SetPlaysInline(this.localVideo);
        var options = {
            localVideo: params.localVideo,
            //remoteVideo : params.remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferOneToManyCall(error, offerSdp);
            });
        });
    }
    onOfferOneToManyCall(error, offerSdp) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_many";
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.call_type = "one_to_many";
        callRequest.SendCallRequest(this.ws);
    }
    AcceptBroadcast(remoteVideo) {
        let from = this.currentFromUser;
        this.mediaType = "video";
        CommonHelper_1.SetPlaysInline(remoteVideo);
        var options = {
            remoteVideo: remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, from);
            },
            onerror: this.onError
        };
        this.webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferIncomingCall(error, offerSdp, from);
            });
        });
    }
    AcceptPublicBroadcast(remoteVideo, sessionID) {
        this.mediaType = "video";
        var constraints = {
            audio: false,
            video: false
        };
        CommonHelper_1.SetPlaysInline(remoteVideo);
        var options = {
            //mediaConstraints: constraints,
            remoteVideo: remoteVideo,
            onicecandidate: (candidate) => {
                this.onPublicIceCandidate(candidate, this.currentUser, sessionID);
            },
            onerror: this.onError
        };
        let webRtcPeer = new vidWebRTC.WebRtcPeer.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferPublicUrlCall(error, offerSdp, sessionID);
            });
        });
        this.broadCastSession[sessionID] = webRtcPeer;
    }
    /*********************************************************
     *
     * End Call One To Many Type
     *
     *
     *********************************************************/
    /**
     *
     * @param error
     * @param offerSdp
     * @returns
     */
    onOfferCall(error, offerSdp, media_type) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.media_type = media_type;
        callRequest.SendCallRequest(this.ws);
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_one";
        console.log(' OnOfferCall :: :: ::', media_type);
        // var message = {
        // 	id : 'call',
        // 	from : this.currentUser,
        // 	to : this.to,
        // 	sdpOffer : offerSdp
        // };
        // console.log('Invoking SDP Message',message);
        // this.SendPacket(message);
    }
    DisposeWebrtc(status) {
        if (this.webRtcPeer) {
            this.webRtcPeer.dispose();
            this.webRtcPeer = null;
            if (status) {
                var messageStop = {
                    "type": "request",
                    "requestType": "session_cancel",
                    "requestID": new Date().getTime().toString(),
                    "sessionUUID": this.UUIDSessions[this.currentFromUser],
                    "mcToken": "f3101a4f686d4dd7993ded88d9e386e5"
                };
                this.SendPacket(messageStop);
            }
            let session = this.UUIDSessions[this.currentFromUser];
            delete this.UUIDSessionTypes[session];
            delete this.UUIDSessions[this.currentFromUser];
        }
    }
    onError(error) {
        EventHandler_1.default.OnRTCPeer(error, this);
    }
    onPublicIceCandidate(candidate, referenceID, sessionID) {
        console.log("Local candidate" + JSON.stringify(candidate));
        var message = {
            id: 'onIceCandidate',
            requestType: 'onIceCandidate',
            type: "request",
            candidate: candidate,
            referenceID: referenceID,
            sessionUUID: sessionID
        };
        this.SendPacket(message);
    }
    onIceCandidate(candidate, referenceID) {
        console.log("Local candidate" + JSON.stringify(candidate));
        var message = {
            id: 'onIceCandidate',
            requestType: 'onIceCandidate',
            type: "request",
            candidate: candidate,
            referenceID: referenceID,
            sessionUUID: this.UUIDSessions[referenceID]
        };
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * EndCall
     */
    EndCall() {
        let from = this.currentFromUser;
        let messageStop = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(messageStop);
        this.DisposeWebrtc(false);
    }
    CancelCall() {
        let from = this.currentFromUser;
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    EndBroadCasting() {
        let from = this.currentFromUser;
        let sessions = Object.assign({}, this.broadCastSession);
        for (var ses in sessions) {
            let rtc = sessions[ses];
            let messageStop = {
                "type": "request",
                "requestType": "session_cancel",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": ses,
                "mcToken": this.McToken
            };
            this.SendPacket(messageStop);
            if (rtc) {
            }
            rtc.dispose();
            delete this.broadCastSession[ses];
        }
    }
    /////////////////////
    ////Mic and Camera Events
    SetMicMute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video" && this.videoStatus == 1) ? 1 : 0;
            this.audioStatus = 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = false;
            if (this.localVideo.localName == "audio") {
                this.localVideo.audioTracks[0].enabled = false;
            }
        }
    }
    /**
     * SetMicMute
     */
    SetMicUnmute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video" && this.videoStatus == 1) ? 1 : 0;
            this.audioStatus = 1;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = true;
            if (this.localVideo.localName == "audio")
                this.localVideo.audioTracks[0].enabled = true;
        }
    }
    /**
     * SetCameraOn
     */
    SetCameraOn() {
        if (this.localVideo && this.localVideo != undefined) {
            this.videoStatus = 1;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": 1
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = true;
        }
    }
    /**
     * SetCameraOff
     */
    SetCameraOff() {
        if (this.localVideo && this.localVideo != undefined) {
            this.videoStatus = 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": 0
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = false;
        }
    }
}
exports.default = Broadcast;


/***/ })
/******/ ]);
});