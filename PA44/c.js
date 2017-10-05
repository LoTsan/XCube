function initWB() {
    var e = document.forms[0];
    e.ew.value = 2702.77,
    e.ewarm.value = 87.73,
    e.f1w.value = 353,
    e.f1arm.value = 80.5,
    e.fuel1w.value = 435.6,
    e.fuel1arm.value = 95,
    e.r1w.value = 0,
    e.r1arm.value = 118.1,
    e.bag1w.value = 0,
    e.bag1arm.value = 142.8,
    e.txfuel1w.value = -16,
    e.txfuel1arm.value = 95;
    var u = document.forms[2];
    u.windhcrs.value = 200,
    u.windhtas.value = 110,
    u.windhspeed.value = 25,
    u.windhdir.value = 157;
    Number(u.windhcrs.value),
    Number(u.windhtas.value),
    Number(u.windhspeed.value),
    Number(u.windhdir.value);
    doCalc(),
    windv()
}
function WB_Plot(e, u, a, r) {
	var v = (document.forms[0], 692 - Math.round((e - 2300) / 1500 * 610)),
    l = Math.round((u-88.5)/4.5*(((692-v)*121/610)+140))+270,
    t = 692 - Math.round((a - 2300) / 1500 * 610),
    n = Math.round((r-88.5)/4.5*(((692-t)*121/610)+140))+270,
    m = document.getElementById("wbCanvas"),
    o = m.getContext("2d");
    o.clearRect(0, 0, m.width, m.height),
    o.beginPath(),
    o.moveTo(l, v),
    o.lineTo(n, t),
    o.lineWidth = 2,
    o.globalAlpha = .7,
    o.strokeStyle = "red",
    o.stroke(),
    o.closePath()
}
function GetRound(e, u) {
    return Math.round(e * Math.pow(10, u)) / Math.pow(10, u)
}
function MintoL(e) {
    return Number(GetRound(85 * e / 60, 1))
}
function LtoMin(e) {
    return Number(GetRound(60 * e / 85, 1))
}
function doCalc() {
    var e = document.forms[0],
    u = Number(e.ew.value),
    a = Number(e.ewarm.value),
    r = Number(u * a);
    e.ewmom.value = GetRound(r, 2);
    var l = Number(e.f1w.value),
    n = Number(e.f1arm.value),
    t = Number(l * n);
    e.f1mom.value = GetRound(t, 2);
    var m = Number(e.r1w.value),
    d = Number(e.r1arm.value),
    i = Number(m * d);
    e.r1mom.value = GetRound(i, 2);
    var b = Number(e.bag1w.value),
    w = Number(e.bag1arm.value),
    M = Number(b * w);
    e.bag1mom.value = GetRound(M, 2);
    var c = Number(u + l + m + b),
    s = Number(r + t + i + M),
    R = Number(s / c);
    e.zfwmom.value = GetRound(s, 2),
    e.zfw.value = GetRound(c, 2),
    e.zfwarm.value = GetRound(R, 2);
    var g = Number(e.fuel1w.value),
    x = Number(g * e.fuel1arm.value);
    e.fuel1mom.value = GetRound(x, 2);
    var p = Number(c + g),
    P = Number(s + x),
    C = Number(P / p);
    e.rpwmom.value = GetRound(P, 2),
    e.rpw.value = GetRound(p, 2),
    e.rpwarm.value = GetRound(C, 2);
    var F = Number(e.txfuel1w.value),
    q = Number(F * e.txfuel1arm.value);
    e.txfuel1mom.value = GetRound(q, 2);
    var A = Number(p + F);
    e.totwt.value = GetRound(A, 2);
    var B = Number(P + q);
    e.totmom.value = GetRound(B, 2);
    var E = Number(B / A);
    e.totarm.value = GetRound(E, 2),
    WB_Plot(e.totwt.value, e.totarm.value, e.zfw.value, e.zfwarm.value)
}
function initFl() {
    var e = document.forms[1];
    e.ClimbMin.value = 0,
    e.CruiseMin.value = 60,
    e.AlternateMin.value = 0,
    e.VariableMin.value = 0,
    e.FixedMin.value = 45,
    e.HoldingMin.value = 0,
    e.TaxiL.value = 8,
    e.EnduranceL.value = 201,
    doFuel()
}
function doFuel() {
    var e = document.forms[1],
    u = Number(e.ClimbMin.value),
    a = MintoL(u);
    e.ClimbL.value = a;
    var r = Number(e.CruiseMin.value),
    l = Math.ceil(MintoL(r));
    e.CruiseL.value = l;
    var v = Number(e.AlternateMin.value),
    n = Math.ceil(MintoL(v));
    e.AlternateL.value = n,
    e.SubMin.value = u + r + v;
    var t = Number(e.SubMin.value),
    m = a + l + n;
    e.SubL.value = m;
    var o = Number(e.VariableMin.value),
    d = MintoL(o);
    e.VariableL.value = d;
    var i = Number(e.FixedMin.value),
    b = MintoL(i);
    e.FixedL.value = b;
    var w = Number(e.HoldingMin.value),
    M = MintoL(w);
    e.HoldingL.value = M;
    var h = Number(e.TaxiL.value);
    e.RequiredMin.value = t + o + i + w;
    var N = Number(e.RequiredMin.value),
    f = Math.ceil(m + d + b + M + h);
    e.RequiredL.value = f;
    var c = e.EnduranceL.value,
    s = c - f,
    R = Math.floor(LtoMin(s));
    e.MarginL.value = GetRound(s, 1),
    e.MarginMin.value = R;
    var G = Math.floor(N + R);
    e.EnduranceMin.value = Number(G)
}
function windv() {
    var e = document.forms[2],
    u = Number(e.windhcrs.value),
    a = Number(e.windhtas.value),
    r = Number(e.windhspeed.value),
    l = Number(e.windhdir.value);
    u = Math.PI / 180 * u,
    wd = Math.PI / 180 * l,
    swc = r / a * Math.sin(wd - u),
    hd = u + Math.asin(swc),
    hd < 0 && (hd += 2 * Math.PI),
    hd > 2 * Math.PI && (hd -= 2 * Math.PI);
    var v = (Math.round(180 / Math.PI * hd) - parseFloat(u), Number(Math.round(180 / Math.PI * hd))),
    n = Number(Math.round(a * Math.sqrt(1 - Math.pow(swc, 2)) - r * Math.cos(wd - u)));
    e.windhdg.value = GetRound(v, 1),
    e.windgs.value = GetRound(n, 1)
}