(function() {
    var type_impls = Object.fromEntries([["fiat_crypto",[]],["libc",[]],["linux_raw_sys",[]],["lz4_sys",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[18,12,21,15]}