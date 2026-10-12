
sampler2D TextureSampler : register(s0);
uniform float4 pureColor = float4(1, 1, 1, 1);

float4 main(float4 inColor : COLOR0, float2 pos : TEXCOORD0) : COLOR0{
    float4 orig = tex2D(TextureSampler, pos);
    return float4(pureColor.r, pureColor.g, pureColor.b, 1) * orig.a;
}


technique BasicTech {
    pass Pass0 {
        PixelShader = compile ps_3_0 main();
    }
}