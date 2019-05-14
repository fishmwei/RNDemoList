//
//  RNDebugManager.m
//  iOSRNDemoProject
//
//  Created by huangmingwei on 2019/5/9.
//  Copyright © 2019年 fishmwei. All rights reserved.
//

#import "RNDebugManager.h"


//#if __has_include("RCTDevSettings.h")
void closeDebugRemotely() {
    Class RCTDevSettingsClass = NSClassFromString(@"RCTDevSettings");
    if (RCTDevSettingsClass) {
        id instance = [RCTDevSettingsClass new];
        if (instance) {
            SEL selector = NSSelectorFromString(@"setIsDebuggingRemotely:");
            NSMethodSignature *singture = [RCTDevSettingsClass instanceMethodSignatureForSelector:selector];
            
            if (singture) {
                BOOL enable = NO;
                NSInvocation *invocation = [NSInvocation invocationWithMethodSignature:singture];
                [invocation setTarget:instance];
                [invocation setSelector:selector];
                [invocation setArgument:&enable atIndex:2];
                [invocation invoke];
            }
        }
    }
}
//#endif

@implementation RNDebugManager

+ (void)load {
//#if __has_include("RCTDevSettings.h")
    // 关掉debug remotely
    closeDebugRemotely();
//#endif
}

+ (instancetype)sharedInstance {
    static RNDebugManager *instance = nil;
    
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[RNDebugManager alloc] init];
    });
    
    return instance;
}

@end
