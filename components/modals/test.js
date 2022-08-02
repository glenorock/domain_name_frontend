let paymentIframe = document.createElement("iframe"),
    body = document.querySelector("body"),
    url = "https://js-sdk.payunit.net?",
    enc = new TextEncoder;
export function PayUnit(e = {
    apiUsername: "",
    apiPassword: "",
    x_api_key: "",
    mode: ""
}, t = {
    return_url: "",
    notify_url: "",
    description: "",
    purchaseRef: "",
    total_amount: "",
    currency: "XAF",
    transaction_id: ""
}) {
    paymentIframe.style = "\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    border: none !important;\n    height: 100% !important;\n    width: 100% !important;\n    overflow: auto !important;\n    z-index: 999999 !important;\n    background-color: rgba(0,0,0,0.5) !important;\n    transition: all 0.1s ease !important;\n   ";
    window.addEventListener("DOMContentLoaded", (n => {
        (async function (e = {}) {
            let t = Math.floor(1e10 * Math.random() / Math.random()) + "$pay_unit#!",
                n = {};
            for (let [a, r] of Object.entries(e)) n[a] = await code(r, t);
            for (let [e, a] of Object.entries(n)) {
                e = "currency" === e ? e + "@" + t : e;
                url += btoa(e) + "!!=!!" + a + "&"
            }
            return url
        })({
            apiUsername: e.apiUsername,
            apiPassword: e.apiPassword,
            x_api_key: e.x_api_key,
            mode: e.mode,
            return_url: t.return_url,
            notify_url: t.notify_url,
            description: t.description,
            purchaseRef: t.purchaseRef,
            total_amount: t.total_amount,
            currency: t.currency,
            transaction_id: t.transaction_id
        }).then((e => {
            paymentIframe.src = e
        }));
        document.querySelector("#payunit-pay").addEventListener("click", (e => {
            e.preventDefault();
            console.log("here");
            body.appendChild(paymentIframe)
        }))
    }));
    window.addEventListener("message", (e => {
        "close_@payunit_@Btn" === e.data && setTimeout((() => {
            body.removeChild(paymentIframe)
        }), 1e3);
        window.addEventListener("message", (e => {
            "close_@payunit_@Btn" === e.data ? setTimeout((() => {
                body.removeChild(paymentIframe)
            }), 1e3) : e.data
        }))
    }))
}
async function code(e, t) {
    const n = e => btoa(String.fromCharCode.apply(null, e));
    return await async function (e, t) {
        try {
            const a = window.crypto.getRandomValues(new Uint8Array(16)),
                r = window.crypto.getRandomValues(new Uint8Array(12)),
                o = await (e => window.crypto.subtle.importKey("raw", enc.encode(e), "PBKDF2", !1, ["deriveKey"]))(t),
                i = await ((e, t, n) => window.crypto.subtle.deriveKey({
                    name: "PBKDF2",
                    salt: t,
                    iterations: 25e4,
                    hash: "SHA-256"
                }, e, {
                    name: "AES-GCM",
                    length: 256
                }, !1, n))(o, a, ["encrypt"]),
                d = await window.crypto.subtle.encrypt({
                    name: "AES-GCM",
                    iv: r
                }, i, (new TextEncoder).encode(e)),
                c = new Uint8Array(d);
            let s = new Uint8Array(a.byteLength + r.byteLength + c.byteLength);
            s.set(a, 0);
            s.set(r, a.byteLength);
            s.set(c, a.byteLength + r.byteLength);
            return n(s)
        } catch (e) {
            throw `Error - ${e}`
        }
    }(e, t).then((e => e)).catch((e => {
        throw e
    }))
}