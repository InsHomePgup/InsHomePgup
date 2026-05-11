# 清除旧的端口转发规则
netsh interface portproxy reset

# 获取当前 WSL2 IP
$wslIp = (wsl hostname -I).Trim().Split()[0]

# 添加端口转发
netsh interface portproxy add v4tov4 listenport=5137 listenaddress=0.0.0.0 connectport=5137 connectaddress=$wslIp
netsh interface portproxy add v4tov4 listenport=3002 listenaddress=0.0.0.0 connectport=3002 connectaddress=$wslIp
netsh interface portproxy add v4tov4 listenport=3015 listenaddress=0.0.0.0 connectport=3015 connectaddress=$wslIp

# 确保防火墙规则存在
foreach ($port in @(5137, 3002, 3015)) {
    $ruleName = "WSL2 Vite Dev $port"
    if (-not (Get-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue)) {
        New-NetFirewallRule -DisplayName $ruleName -Direction Inbound -Protocol TCP -LocalPort $port -Action Allow | Out-Null
    }
}

#
# netsh interface portproxy add v4tov4 listenport=4000 listenaddress=0.0.0.0 connectport=4000 connectaddress=$wslIp

#   同时在 foreach 的数组里加上 4000：

#   foreach ($port in @(5137, 3002, 4000)) {
  
# 去打开一个管理员的powershell 运行这个脚本  & '脚本路径'