initSidebarItems({"constant":[["JANET_64",""],["JANET_BUILD",""],["JANET_CURRENT_CONFIG_BITS",""],["JANET_EV_TCTAG_BOOLEAN",""],["JANET_EV_TCTAG_ERR_KEYWORD",""],["JANET_EV_TCTAG_ERR_STRING",""],["JANET_EV_TCTAG_ERR_STRINGF",""],["JANET_EV_TCTAG_INTEGER",""],["JANET_EV_TCTAG_KEYWORD",""],["JANET_EV_TCTAG_NIL",""],["JANET_EV_TCTAG_STRING",""],["JANET_EV_TCTAG_STRINGF",""],["JANET_FILE_APPEND",""],["JANET_FILE_BINARY",""],["JANET_FILE_CLOSED",""],["JANET_FILE_NONIL",""],["JANET_FILE_NOT_CLOSEABLE",""],["JANET_FILE_PIPED",""],["JANET_FILE_READ",""],["JANET_FILE_SERIALIZABLE",""],["JANET_FILE_UPDATE",""],["JANET_FILE_WRITE",""],["JANET_FRAME_SIZE",""],["JANET_FUNCDEF_FLAG_HASCLOBITSET",""],["JANET_FUNCDEF_FLAG_HASDEFS",""],["JANET_FUNCDEF_FLAG_HASENVS",""],["JANET_FUNCDEF_FLAG_HASNAME",""],["JANET_FUNCDEF_FLAG_HASSOURCE",""],["JANET_FUNCDEF_FLAG_HASSOURCEMAP",""],["JANET_FUNCDEF_FLAG_NEEDSENV",""],["JANET_FUNCDEF_FLAG_STRUCTARG",""],["JANET_FUNCDEF_FLAG_TAG",""],["JANET_FUNCDEF_FLAG_VARARG",""],["JANET_FUNCFLAG_TRACE",""],["JANET_HANDLE_NONE",""],["JANET_INTMAX_DOUBLE",""],["JANET_INTMAX_INT64",""],["JANET_INTMIN_DOUBLE",""],["JANET_INTMIN_INT64",""],["JANET_LINUX",""],["JANET_LITTLE_ENDIAN",""],["JANET_MARSHAL_UNSAFE",""],["JANET_MAX_MACRO_EXPAND",""],["JANET_MAX_PROTO_DEPTH",""],["JANET_NANBOX_BIT",""],["JANET_NANBOX_PAYLOADBITS",""],["JANET_NANBOX_TAGBITS",""],["JANET_POSIX",""],["JANET_PRETTY_COLOR",""],["JANET_PRETTY_NOTRUNC",""],["JANET_PRETTY_ONELINE",""],["JANET_RECURSION_GUARD",""],["JANET_SINGLE_THREADED_BIT",""],["JANET_STACKFRAME_ENTRANCE",""],["JANET_STACKFRAME_TAILCALL",""],["JANET_STACK_MAX",""],["JANET_STREAM_ACCEPTABLE",""],["JANET_STREAM_CLOSED",""],["JANET_STREAM_IOCP",""],["JANET_STREAM_READABLE",""],["JANET_STREAM_SOCKET",""],["JANET_STREAM_UDPSERVER",""],["JANET_STREAM_WRITABLE",""],["JANET_TUPLE_FLAG_BRACKETCTOR",""],["JANET_VERSION",""],["JANET_VERSION_EXTRA",""],["JANET_VERSION_MAJOR",""],["JANET_VERSION_MINOR",""],["JANET_VERSION_PATCH",""],["JanetAssembleStatus_JANET_ASSEMBLE_ERROR",""],["JanetAssembleStatus_JANET_ASSEMBLE_OK",""],["JanetAsyncEvent_JANET_ASYNC_EVENT_CANCEL",""],["JanetAsyncEvent_JANET_ASYNC_EVENT_CLOSE",""],["JanetAsyncEvent_JANET_ASYNC_EVENT_COMPLETE",""],["JanetAsyncEvent_JANET_ASYNC_EVENT_DEINIT",""],["JanetAsyncEvent_JANET_ASYNC_EVENT_ERR",""],["JanetAsyncEvent_JANET_ASYNC_EVENT_HUP",""],["JanetAsyncEvent_JANET_ASYNC_EVENT_INIT",""],["JanetAsyncEvent_JANET_ASYNC_EVENT_MARK",""],["JanetAsyncEvent_JANET_ASYNC_EVENT_READ",""],["JanetAsyncEvent_JANET_ASYNC_EVENT_USER",""],["JanetAsyncEvent_JANET_ASYNC_EVENT_WRITE",""],["JanetAsyncStatus_JANET_ASYNC_STATUS_DONE",""],["JanetAsyncStatus_JANET_ASYNC_STATUS_NOT_DONE",""],["JanetBindingType_JANET_BINDING_DEF",""],["JanetBindingType_JANET_BINDING_MACRO",""],["JanetBindingType_JANET_BINDING_NONE",""],["JanetBindingType_JANET_BINDING_VAR",""],["JanetBinding_JANET_BINDING_DEP_NONE",""],["JanetBinding_JANET_BINDING_DEP_NORMAL",""],["JanetBinding_JANET_BINDING_DEP_RELAXED",""],["JanetBinding_JANET_BINDING_DEP_STRICT",""],["JanetCompileStatus_JANET_COMPILE_ERROR",""],["JanetCompileStatus_JANET_COMPILE_OK",""],["JanetFiberStatus_JANET_STATUS_ALIVE",""],["JanetFiberStatus_JANET_STATUS_DEAD",""],["JanetFiberStatus_JANET_STATUS_DEBUG",""],["JanetFiberStatus_JANET_STATUS_ERROR",""],["JanetFiberStatus_JANET_STATUS_NEW",""],["JanetFiberStatus_JANET_STATUS_PENDING",""],["JanetFiberStatus_JANET_STATUS_USER0",""],["JanetFiberStatus_JANET_STATUS_USER1",""],["JanetFiberStatus_JANET_STATUS_USER2",""],["JanetFiberStatus_JANET_STATUS_USER3",""],["JanetFiberStatus_JANET_STATUS_USER4",""],["JanetFiberStatus_JANET_STATUS_USER5",""],["JanetFiberStatus_JANET_STATUS_USER6",""],["JanetFiberStatus_JANET_STATUS_USER7",""],["JanetFiberStatus_JANET_STATUS_USER8",""],["JanetFiberStatus_JANET_STATUS_USER9",""],["JanetInstructionType_JINT_0",""],["JanetInstructionType_JINT_L",""],["JanetInstructionType_JINT_S",""],["JanetInstructionType_JINT_SC",""],["JanetInstructionType_JINT_SD",""],["JanetInstructionType_JINT_SES",""],["JanetInstructionType_JINT_SI",""],["JanetInstructionType_JINT_SL",""],["JanetInstructionType_JINT_SS",""],["JanetInstructionType_JINT_SSI",""],["JanetInstructionType_JINT_SSS",""],["JanetInstructionType_JINT_SSU",""],["JanetInstructionType_JINT_ST",""],["JanetInstructionType_JINT_SU",""],["JanetIntType_JANET_INT_NONE",""],["JanetIntType_JANET_INT_S64",""],["JanetIntType_JANET_INT_U64",""],["JanetOpArgType_JANET_OAT_CONSTANT",""],["JanetOpArgType_JANET_OAT_ENVIRONMENT",""],["JanetOpArgType_JANET_OAT_FUNCDEF",""],["JanetOpArgType_JANET_OAT_INTEGER",""],["JanetOpArgType_JANET_OAT_LABEL",""],["JanetOpArgType_JANET_OAT_SIMPLETYPE",""],["JanetOpArgType_JANET_OAT_SLOT",""],["JanetOpArgType_JANET_OAT_TYPE",""],["JanetOpCode_JOP_ADD",""],["JanetOpCode_JOP_ADD_IMMEDIATE",""],["JanetOpCode_JOP_BAND",""],["JanetOpCode_JOP_BNOT",""],["JanetOpCode_JOP_BOR",""],["JanetOpCode_JOP_BXOR",""],["JanetOpCode_JOP_CALL",""],["JanetOpCode_JOP_CANCEL",""],["JanetOpCode_JOP_CLOSURE",""],["JanetOpCode_JOP_COMPARE",""],["JanetOpCode_JOP_DIVIDE",""],["JanetOpCode_JOP_DIVIDE_IMMEDIATE",""],["JanetOpCode_JOP_EQUALS",""],["JanetOpCode_JOP_EQUALS_IMMEDIATE",""],["JanetOpCode_JOP_ERROR",""],["JanetOpCode_JOP_GET",""],["JanetOpCode_JOP_GET_INDEX",""],["JanetOpCode_JOP_GREATER_THAN",""],["JanetOpCode_JOP_GREATER_THAN_EQUAL",""],["JanetOpCode_JOP_GREATER_THAN_IMMEDIATE",""],["JanetOpCode_JOP_IN",""],["JanetOpCode_JOP_INSTRUCTION_COUNT",""],["JanetOpCode_JOP_JUMP",""],["JanetOpCode_JOP_JUMP_IF",""],["JanetOpCode_JOP_JUMP_IF_NIL",""],["JanetOpCode_JOP_JUMP_IF_NOT",""],["JanetOpCode_JOP_JUMP_IF_NOT_NIL",""],["JanetOpCode_JOP_LENGTH",""],["JanetOpCode_JOP_LESS_THAN",""],["JanetOpCode_JOP_LESS_THAN_EQUAL",""],["JanetOpCode_JOP_LESS_THAN_IMMEDIATE",""],["JanetOpCode_JOP_LOAD_CONSTANT",""],["JanetOpCode_JOP_LOAD_FALSE",""],["JanetOpCode_JOP_LOAD_INTEGER",""],["JanetOpCode_JOP_LOAD_NIL",""],["JanetOpCode_JOP_LOAD_SELF",""],["JanetOpCode_JOP_LOAD_TRUE",""],["JanetOpCode_JOP_LOAD_UPVALUE",""],["JanetOpCode_JOP_MAKE_ARRAY",""],["JanetOpCode_JOP_MAKE_BRACKET_TUPLE",""],["JanetOpCode_JOP_MAKE_BUFFER",""],["JanetOpCode_JOP_MAKE_STRING",""],["JanetOpCode_JOP_MAKE_STRUCT",""],["JanetOpCode_JOP_MAKE_TABLE",""],["JanetOpCode_JOP_MAKE_TUPLE",""],["JanetOpCode_JOP_MODULO",""],["JanetOpCode_JOP_MOVE_FAR",""],["JanetOpCode_JOP_MOVE_NEAR",""],["JanetOpCode_JOP_MULTIPLY",""],["JanetOpCode_JOP_MULTIPLY_IMMEDIATE",""],["JanetOpCode_JOP_NEXT",""],["JanetOpCode_JOP_NOOP",""],["JanetOpCode_JOP_NOT_EQUALS",""],["JanetOpCode_JOP_NOT_EQUALS_IMMEDIATE",""],["JanetOpCode_JOP_PROPAGATE",""],["JanetOpCode_JOP_PUSH",""],["JanetOpCode_JOP_PUSH_2",""],["JanetOpCode_JOP_PUSH_3",""],["JanetOpCode_JOP_PUSH_ARRAY",""],["JanetOpCode_JOP_PUT",""],["JanetOpCode_JOP_PUT_INDEX",""],["JanetOpCode_JOP_REMAINDER",""],["JanetOpCode_JOP_RESUME",""],["JanetOpCode_JOP_RETURN",""],["JanetOpCode_JOP_RETURN_NIL",""],["JanetOpCode_JOP_SET_UPVALUE",""],["JanetOpCode_JOP_SHIFT_LEFT",""],["JanetOpCode_JOP_SHIFT_LEFT_IMMEDIATE",""],["JanetOpCode_JOP_SHIFT_RIGHT",""],["JanetOpCode_JOP_SHIFT_RIGHT_IMMEDIATE",""],["JanetOpCode_JOP_SHIFT_RIGHT_UNSIGNED",""],["JanetOpCode_JOP_SHIFT_RIGHT_UNSIGNED_IMMEDIATE",""],["JanetOpCode_JOP_SIGNAL",""],["JanetOpCode_JOP_SUBTRACT",""],["JanetOpCode_JOP_TAILCALL",""],["JanetOpCode_JOP_TYPECHECK",""],["JanetParserStatus_JANET_PARSE_DEAD",""],["JanetParserStatus_JANET_PARSE_ERROR",""],["JanetParserStatus_JANET_PARSE_PENDING",""],["JanetParserStatus_JANET_PARSE_ROOT",""],["JanetPegOpcod_RULE_ACCUMULATE",""],["JanetPegOpcod_RULE_ARGUMENT",""],["JanetPegOpcod_RULE_BACKMATCH",""],["JanetPegOpcod_RULE_BETWEEN",""],["JanetPegOpcod_RULE_CAPTURE",""],["JanetPegOpcod_RULE_CHOICE",""],["JanetPegOpcod_RULE_COLUMN",""],["JanetPegOpcod_RULE_CONSTANT",""],["JanetPegOpcod_RULE_DROP",""],["JanetPegOpcod_RULE_ERROR",""],["JanetPegOpcod_RULE_GETTAG",""],["JanetPegOpcod_RULE_GROUP",""],["JanetPegOpcod_RULE_IF",""],["JanetPegOpcod_RULE_IFNOT",""],["JanetPegOpcod_RULE_LENPREFIX",""],["JanetPegOpcod_RULE_LINE",""],["JanetPegOpcod_RULE_LITERAL",""],["JanetPegOpcod_RULE_LOOK",""],["JanetPegOpcod_RULE_MATCHTIME",""],["JanetPegOpcod_RULE_NCHAR",""],["JanetPegOpcod_RULE_NOT",""],["JanetPegOpcod_RULE_NOTNCHAR",""],["JanetPegOpcod_RULE_POSITION",""],["JanetPegOpcod_RULE_RANGE",""],["JanetPegOpcod_RULE_READINT",""],["JanetPegOpcod_RULE_REPLACE",""],["JanetPegOpcod_RULE_SEQUENCE",""],["JanetPegOpcod_RULE_SET",""],["JanetPegOpcod_RULE_THRU",""],["JanetPegOpcod_RULE_TO",""],["JanetPegOpcod_RULE_UNREF",""],["JanetSignal_JANET_SIGNAL_DEBUG",""],["JanetSignal_JANET_SIGNAL_ERROR",""],["JanetSignal_JANET_SIGNAL_OK",""],["JanetSignal_JANET_SIGNAL_USER0",""],["JanetSignal_JANET_SIGNAL_USER1",""],["JanetSignal_JANET_SIGNAL_USER2",""],["JanetSignal_JANET_SIGNAL_USER3",""],["JanetSignal_JANET_SIGNAL_USER4",""],["JanetSignal_JANET_SIGNAL_USER5",""],["JanetSignal_JANET_SIGNAL_USER6",""],["JanetSignal_JANET_SIGNAL_USER7",""],["JanetSignal_JANET_SIGNAL_USER8",""],["JanetSignal_JANET_SIGNAL_USER9",""],["JanetSignal_JANET_SIGNAL_YIELD",""],["JanetType_JANET_ABSTRACT",""],["JanetType_JANET_ARRAY",""],["JanetType_JANET_BOOLEAN",""],["JanetType_JANET_BUFFER",""],["JanetType_JANET_CFUNCTION",""],["JanetType_JANET_FIBER",""],["JanetType_JANET_FUNCTION",""],["JanetType_JANET_KEYWORD",""],["JanetType_JANET_NIL",""],["JanetType_JANET_NUMBER",""],["JanetType_JANET_POINTER",""],["JanetType_JANET_STRING",""],["JanetType_JANET_STRUCT",""],["JanetType_JANET_SYMBOL",""],["JanetType_JANET_TABLE",""],["JanetType_JANET_TUPLE",""]],"fn":[["__sigsetjmp",""],["_longjmp",""],["_setjmp",""],["janet_abstract",""],["janet_abstract_begin",""],["janet_abstract_end",""],["janet_abstract_head",""],["janet_addtimeout",""],["janet_arity",""],["janet_array",""],["janet_array_ensure",""],["janet_array_n",""],["janet_array_peek",""],["janet_array_pop",""],["janet_array_push",""],["janet_array_setcount",""],["janet_asm",""],["janet_asm_decode_instruction",""],["janet_await",""],["janet_buffer",""],["janet_buffer_deinit",""],["janet_buffer_ensure",""],["janet_buffer_extra",""],["janet_buffer_init",""],["janet_buffer_push_bytes",""],["janet_buffer_push_cstring",""],["janet_buffer_push_string",""],["janet_buffer_push_u16",""],["janet_buffer_push_u32",""],["janet_buffer_push_u64",""],["janet_buffer_push_u8",""],["janet_buffer_setcount",""],["janet_bytes_view",""],["janet_call",""],["janet_calloc",""],["janet_cancel",""],["janet_cfun_stream_chunk",""],["janet_cfun_stream_close",""],["janet_cfun_stream_read",""],["janet_cfun_stream_write",""],["janet_cfuns",""],["janet_cfuns_prefix",""],["janet_checkabstract",""],["janet_checkfile",""],["janet_checkint",""],["janet_checkint64",""],["janet_checksize",""],["janet_checktype",""],["janet_checktypes",""],["janet_clear_memory",""],["janet_collect",""],["janet_compare",""],["janet_compile",""],["janet_compile_lint",""],["janet_continue",""],["janet_continue_signal",""],["janet_core_env",""],["janet_core_lookup_table",""],["janet_cryptorand",""],["janet_cstrcmp",""],["janet_cstring",""],["janet_csymbol",""],["janet_current_fiber",""],["janet_debug_break",""],["janet_debug_find",""],["janet_debug_unbreak",""],["janet_def",""],["janet_default_rng",""],["janet_deinit",""],["janet_description",""],["janet_description_b",""],["janet_dictionary_get",""],["janet_dictionary_next",""],["janet_dictionary_view",""],["janet_disasm",""],["janet_dobytes",""],["janet_dostring",""],["janet_dyn",""],["janet_dynfile",""],["janet_dynprintf",""],["janet_env_lookup",""],["janet_env_lookup_into",""],["janet_equals",""],["janet_ev_dec_refcount",""],["janet_ev_default_threaded_callback",""],["janet_ev_inc_refcount",""],["janet_ev_lasterr",""],["janet_ev_read",""],["janet_ev_readchunk",""],["janet_ev_recv",""],["janet_ev_recvchunk",""],["janet_ev_recvfrom",""],["janet_ev_send_buffer",""],["janet_ev_send_string",""],["janet_ev_sendto_buffer",""],["janet_ev_sendto_string",""],["janet_ev_threaded_await",""],["janet_ev_threaded_call",""],["janet_ev_write_buffer",""],["janet_ev_write_string",""],["janet_fiber",""],["janet_fiber_reset",""],["janet_fiber_status",""],["janet_file_close",""],["janet_fixarity",""],["janet_formatb",""],["janet_formatbv",""],["janet_formatc",""],["janet_free",""],["janet_funcdef_alloc",""],["janet_gclock",""],["janet_gcpressure",""],["janet_gcroot",""],["janet_gcunlock",""],["janet_gcunroot",""],["janet_gcunrootall",""],["janet_get",""],["janet_get_abstract_type",""],["janet_getabstract",""],["janet_getargindex",""],["janet_getarray",""],["janet_getboolean",""],["janet_getbuffer",""],["janet_getbytes",""],["janet_getcfunction",""],["janet_getcstring",""],["janet_getdictionary",""],["janet_getfiber",""],["janet_getfile",""],["janet_getflags",""],["janet_getfunction",""],["janet_gethalfrange",""],["janet_getindex",""],["janet_getindexed",""],["janet_getinteger",""],["janet_getinteger64",""],["janet_getjfile",""],["janet_getkeyword",""],["janet_getmethod",""],["janet_getnat",""],["janet_getnumber",""],["janet_getpointer",""],["janet_getsize",""],["janet_getslice",""],["janet_getstring",""],["janet_getstruct",""],["janet_getsymbol",""],["janet_gettable",""],["janet_gettuple",""],["janet_hash",""],["janet_in",""],["janet_indexed_view",""],["janet_init",""],["janet_is_int",""],["janet_keyeq",""],["janet_length",""],["janet_lengthv",""],["janet_listen",""],["janet_loop",""],["janet_makefile",""],["janet_makejfile",""],["janet_malloc",""],["janet_mark",""],["janet_marshal",""],["janet_marshal_abstract",""],["janet_marshal_byte",""],["janet_marshal_bytes",""],["janet_marshal_int",""],["janet_marshal_int64",""],["janet_marshal_janet",""],["janet_marshal_size",""],["janet_mcall",""],["janet_nanbox_from_bits",""],["janet_nanbox_from_cpointer",""],["janet_nanbox_from_double",""],["janet_nanbox_from_pointer",""],["janet_nanbox_to_pointer",""],["janet_native",""],["janet_next",""],["janet_nextmethod",""],["janet_optabstract",""],["janet_optarray",""],["janet_optboolean",""],["janet_optbuffer",""],["janet_optcfunction",""],["janet_optcstring",""],["janet_optfiber",""],["janet_optfunction",""],["janet_optinteger",""],["janet_optinteger64",""],["janet_optkeyword",""],["janet_optnat",""],["janet_optnumber",""],["janet_optpointer",""],["janet_optsize",""],["janet_optstring",""],["janet_optstruct",""],["janet_optsymbol",""],["janet_opttable",""],["janet_opttuple",""],["janet_panic",""],["janet_panic_abstract",""],["janet_panic_type",""],["janet_panicf",""],["janet_panics",""],["janet_panicv",""],["janet_parser_consume",""],["janet_parser_deinit",""],["janet_parser_eof",""],["janet_parser_error",""],["janet_parser_flush",""],["janet_parser_has_more",""],["janet_parser_init",""],["janet_parser_produce",""],["janet_parser_produce_wrapped",""],["janet_parser_status",""],["janet_pcall",""],["janet_pretty",""],["janet_put",""],["janet_putindex",""],["janet_realloc",""],["janet_register",""],["janet_register_abstract_type",""],["janet_resolve",""],["janet_resolve_core",""],["janet_resolve_ext",""],["janet_restore",""],["janet_rng_longseed",""],["janet_rng_seed",""],["janet_rng_u32",""],["janet_root_fiber",""],["janet_scalloc",""],["janet_scan_int64",""],["janet_scan_number",""],["janet_scan_uint64",""],["janet_schedule",""],["janet_schedule_signal",""],["janet_setdyn",""],["janet_sfinalizer",""],["janet_sfree",""],["janet_signalv",""],["janet_sleep_await",""],["janet_smalloc",""],["janet_sorted_keys",""],["janet_srealloc",""],["janet_stacktrace",""],["janet_step",""],["janet_stream",""],["janet_stream_close",""],["janet_stream_flags",""],["janet_streq",""],["janet_string",""],["janet_string_begin",""],["janet_string_compare",""],["janet_string_end",""],["janet_string_equal",""],["janet_string_equalconst",""],["janet_string_head",""],["janet_struct_begin",""],["janet_struct_end",""],["janet_struct_find",""],["janet_struct_get",""],["janet_struct_head","START SECTION NON-C API"],["janet_struct_put",""],["janet_struct_to_table",""],["janet_sweep",""],["janet_symbol",""],["janet_symbol_gen",""],["janet_symeq",""],["janet_table",""],["janet_table_clear",""],["janet_table_clone",""],["janet_table_deinit",""],["janet_table_find",""],["janet_table_get",""],["janet_table_get_ex",""],["janet_table_init",""],["janet_table_merge_struct",""],["janet_table_merge_table",""],["janet_table_put",""],["janet_table_rawget",""],["janet_table_remove",""],["janet_table_to_struct",""],["janet_thread_current",""],["janet_thread_receive",""],["janet_thread_send",""],["janet_thunk",""],["janet_to_string",""],["janet_to_string_b",""],["janet_truthy",""],["janet_try_init",""],["janet_tuple_begin",""],["janet_tuple_end",""],["janet_tuple_head",""],["janet_tuple_n",""],["janet_type",""],["janet_unmarshal",""],["janet_unmarshal_abstract",""],["janet_unmarshal_byte",""],["janet_unmarshal_bytes",""],["janet_unmarshal_ensure",""],["janet_unmarshal_int",""],["janet_unmarshal_int64",""],["janet_unmarshal_janet",""],["janet_unmarshal_size",""],["janet_unwrap_abstract",""],["janet_unwrap_array",""],["janet_unwrap_boolean",""],["janet_unwrap_buffer",""],["janet_unwrap_cfunction",""],["janet_unwrap_fiber",""],["janet_unwrap_function",""],["janet_unwrap_integer",""],["janet_unwrap_keyword",""],["janet_unwrap_number",""],["janet_unwrap_pointer",""],["janet_unwrap_s64",""],["janet_unwrap_string",""],["janet_unwrap_struct",""],["janet_unwrap_symbol",""],["janet_unwrap_table",""],["janet_unwrap_tuple",""],["janet_unwrap_u64",""],["janet_unwrapfile",""],["janet_var",""],["janet_verify",""],["janet_wrap_abstract",""],["janet_wrap_array",""],["janet_wrap_boolean",""],["janet_wrap_buffer",""],["janet_wrap_cfunction",""],["janet_wrap_false",""],["janet_wrap_fiber",""],["janet_wrap_function",""],["janet_wrap_integer",""],["janet_wrap_keyword",""],["janet_wrap_nil",""],["janet_wrap_number",""],["janet_wrap_number_safe",""],["janet_wrap_pointer",""],["janet_wrap_s64",""],["janet_wrap_string",""],["janet_wrap_struct",""],["janet_wrap_symbol",""],["janet_wrap_table",""],["janet_wrap_true",""],["janet_wrap_tuple",""],["janet_wrap_u64",""],["longjmp",""],["setjmp",""],["siglongjmp",""]],"static":[["janet_file_type",""],["janet_instructions",""],["janet_parser_type",""],["janet_peg_type",""],["janet_rng_type",""],["janet_s64_type",""],["janet_signal_names",""],["janet_status_names",""],["janet_stream_type",""],["janet_thread_type",""],["janet_type_names",""],["janet_u64_type",""]],"struct":[["JanetAbstractHead",""],["JanetAbstractType",""],["JanetArray",""],["JanetAssembleResult",""],["JanetBinding",""],["JanetBuffer",""],["JanetBuildConfig",""],["JanetByteView",""],["JanetCompileResult",""],["JanetDictView",""],["JanetEVGenericMessage",""],["JanetFiber",""],["JanetFile",""],["JanetFuncDef",""],["JanetFuncEnv",""],["JanetFunction",""],["JanetGCObject",""],["JanetKV",""],["JanetListenerState",""],["JanetMailbox",""],["JanetMarshalContext",""],["JanetMethod",""],["JanetParseState",""],["JanetParser",""],["JanetPeg",""],["JanetRNG",""],["JanetRange",""],["JanetReg",""],["JanetSourceMapping",""],["JanetStackFrame",""],["JanetStream",""],["JanetStringHead",""],["JanetStructHead",""],["JanetTable",""],["JanetThread",""],["JanetTryState",""],["JanetTupleHead",""],["JanetView",""],["_IO_FILE",""],["_IO_codecvt",""],["_IO_marker",""],["_IO_wide_data",""],["__IncompleteArrayField",""],["__jmp_buf_tag",""],["__sigset_t",""],["__va_list_tag",""]],"type":[["FILE",""],["JanetAbstract",""],["JanetAssembleStatus",""],["JanetAsyncEvent",""],["JanetAsyncStatus",""],["JanetBindingType",""],["JanetBinding__bindgen_ty_1",""],["JanetCFunction",""],["JanetCompileStatus",""],["JanetFiberStatus",""],["JanetHandle",""],["JanetInstructionType",""],["JanetIntType",""],["JanetKeyword",""],["JanetListener",""],["JanetModconf",""],["JanetModule",""],["JanetOpArgType","START SECTION OPCODES"],["JanetOpCode",""],["JanetParserStatus",""],["JanetPegOpcod",""],["JanetScratchFinalizer",""],["JanetSignal",""],["JanetString",""],["JanetStruct",""],["JanetSymbol",""],["JanetThreadedCallback",""],["JanetThreadedSubroutine",""],["JanetTuple",""],["JanetType",""],["_IO_lock_t",""],["__builtin_va_list",""],["__int32_t",""],["__int64_t",""],["__jmp_buf",""],["__off64_t",""],["__off_t",""],["__uint16_t",""],["__uint32_t",""],["__uint64_t",""],["__uint8_t",""],["jmp_buf",""],["size_t",""],["va_list",""]],"union":[["Janet",""],["JanetFuncEnv__bindgen_ty_1",""]]});